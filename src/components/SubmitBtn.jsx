import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";

  return (
    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmit}>
      {isSubmit ? (
        <>
          <span className="loading loading-spinner"></span>
          Sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
