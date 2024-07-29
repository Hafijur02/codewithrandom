import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { auth } from '../../lib/firebase'; // Make sure the firebase config is correctly imported

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setError(null); // Clear any previous error when closing the modal
    setFile(null); // Clear file selection when closing the modal
    setIsOpen(false);
  };

  const onSubmit = async (values) => {
    if (!file) {
      setError("No file selected. Please upload a file.");
      return;
    }

    try {
      // Handle file upload here
      console.log("File selected:", file);
      console.log("Name entered:", values.name);
      console.log("Bio entered:", values.bio);
      // Example: Upload file to Firebase Storage or other backend

      // Simulate upload completion
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual upload logic

      // Reset form and close modal after upload
      reset();
      setFile(null);
      onClose();
    } catch (uploadError) {
      console.error("Upload failed", uploadError);
      setError("Upload failed. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null); // Clear any previous error
    }
  };

  return (
    <>
      <h1>Name:</h1>
      <h1>Bio:</h1>
      <p>Profile Image:</p>

      <Button onClick={onOpen} color="primary">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Upload Image</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                autoFocus
                type="text"
                label="Name"
                placeholder="Enter your Name"
                variant="bordered"
                {...register("name", { required: true })}
              />
              <Input
                type="text"
                label="Bio"
                placeholder="Enter your Bio"
                variant="bordered"
                {...register("bio", { required: true })}
                className="mt-4"
              />
              <Input
                type="file"
                label="Profile Image"
                accept="image/*"
                placeholder="Upload your profile image"
                variant="bordered"
                {...register("image", { required: true })}
                onChange={handleFileChange}
                className="mt-4"
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <Button color="primary" type="submit" className="mt-4">
                Upload
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Account;
