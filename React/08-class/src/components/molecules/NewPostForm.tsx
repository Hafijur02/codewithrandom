import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Progress,
} from "@nextui-org/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { bucket, db, auth } from "../../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function NewPostForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("File selected:", selectedFile);
    if (selectedFile) {
      setFile(selectedFile);
      setError(null); // Clear any previous errors
    }
  };

  const onSubmit = async (values) => {
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    if (!auth.currentUser) {
      setError("You must be logged in to upload a post.");
      return;
    }

    setError(null);

    // Create a new document with the file name as ID
    const docRef = doc(db, "posts", file.name); // Unique ID using file name
    await setDoc(docRef, {
      title: values.title,
      description: values.description,
      timestamp: serverTimestamp(),
      user: auth.currentUser.email, // Store user information
    });

    const storageRef = ref(bucket, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed", error);
        setError("Upload failed. Please try again.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // Update the Firestore document with the download URL
          setDoc(docRef, { imageUrl: downloadURL }, { merge: true });

          setProgress(0); // Reset progress after upload completes
          setFile(null); // Clear file input
          reset(); // Reset the form after upload
          onClose(); // Close the modal after upload
        });
      }
    );
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        New Post
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">New Post</ModalHeader>
            <ModalBody>
              <Input
                type="file"
                accept="image/*"
                aria-label="Image upload"
                placeholder="Upload your image"
                variant="bordered"
                onChange={handleFileChange}
              />
              <Input
                type="text"
                label="Title"
                placeholder="Write a title"
                variant="bordered"
                {...register("title", { required: true })}
                className="mt-4"
              />
              <Input
                type="text"
                label="Description"
                placeholder="Write a description"
                variant="bordered"
                {...register("description", { required: true })}
                className="mt-4"
              />
              {progress > 0 && (
                <div className="mt-4">
                  <Progress value={progress} />
                  <p>{Math.round(progress)}%</p>{" "}
                  {/* Display the progress as a percentage */}
                </div>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit">
                Upload
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
