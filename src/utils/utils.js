import resumeURL from "/static/resume.pdf";
export const downloadResume = () => {
  fetch(resumeURL).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "werdien-jihed-resume.pdf";
      alink.click();
    });
  });
};
