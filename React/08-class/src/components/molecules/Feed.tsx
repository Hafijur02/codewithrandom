import { useEffect, useState } from "react";
import NewPostForm from "./NewPostForm";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { bucket } from "../../lib/firebase"; // Adjust the path as needed

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch posts
  const fetchPosts = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const listRef = ref(bucket, "images/");
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      setPosts(urls);
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
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map((url, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={url}
                alt={`Post ${index}`}
                className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </main>
  );
};

export default Feed;
