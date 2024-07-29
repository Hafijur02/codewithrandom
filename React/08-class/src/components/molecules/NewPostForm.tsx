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
import { bucket } from "../../lib/firebase";

export default function NewPostForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  const onSubmit = async (data) => {
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    setError(null);

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
          // Handle the download URL, e.g., save it in your Firestore database along with the caption
          setProgress(0); // Reset progress after upload completes
          setFile(null); // Clear file input
          reset(); // Reset the form after upload
          onOpenChange(); // Close the modal after upload
        });
      }
    );
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                New Post
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  type="file"
                  accept="image/*"
                  aria-label="Image upload"
                  placeholder="Upload your image"
                  variant="bordered"
                  onChange={handleFileChange}
                />
                <Input
                  label="Caption"
                  placeholder="Enter a caption"
                  type="text"
                  variant="bordered"
                  {...register("caption", { required: true })}
                />
                {progress > 0 && <Progress value={progress} className="mt-4" />}
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
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
