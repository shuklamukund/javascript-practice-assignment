function checkvalidLinkedInURL(input){
    const regex=/^http(s)?:\/\/(www)?\.linkedin\.com\/in\/.*$/;

    if (regex.test(input)) {
        console.log(`${input} is a valid URL.`);
      } else {
        console.log(`${input} is not a valid URL.`);
      }
}

checkvalidLinkedInURL("https://www.linkedin.com/in");
checkvalidLinkedInURL("www.linkedin.com/in");
checkvalidLinkedInURL("https://www.linkedin.com/in/jb-jezequel-87b639163/.");