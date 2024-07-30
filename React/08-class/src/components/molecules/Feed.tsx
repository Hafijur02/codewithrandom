import { useEffect, useState } from "react";
import NewPostForm from "./NewPostForm";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { bucket, db, auth } from "../../lib/firebase";
import { Card } from "@nextui-org/react";
import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch posts
  const fetchPosts = async () => {
    setLoading(true); // Set loading to true before fetching

    try {
      // Fetch post metadata from Firestore
      const postsSnapshot = await getDocs(collection(db, "posts"));
      const postMetadata = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Fetch image URLs from Firebase Storage
      const listRef = ref(bucket, "images/");
      const res = await listAll(listRef);

      const postsWithUrls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const post = postMetadata.find((p) => p.id === itemRef.name); // Match metadata by document ID
          return {
            url,
            user: auth.currentUser?.email || "Anonymous", // Fallback to "Anonymous" if user is not available
            title: post?.title || "Untitled",
            description: post?.description || "No description",
          };
        })
      );

      setPosts(postsWithUrls);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  return (
    <main className="p-4">
      <NewPostForm />
      {loading && <p>Loading...</p>}
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-2 gap-4">
        <div className="mt-4 grid grid-cols-1 gap-6">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="flex justify-center items-center">
                <Card className="w-full max-w-sm p-4 shadow-lg">
                  <img
                    src={post.url}
                    alt={`Post ${index}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-gray-500">
                      Posted by: {auth.currentUser?.email}
                    </p>{" "}
                    {/* Display user information */}
                    <p className="font-semibold">Title: {post.title}</p>
                    <p className="text-gray-600">
                      Description: {post.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Feed;
