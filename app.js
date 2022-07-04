//set things to run when main function is called
async function main(){
    //slice the hashtag symbol in the variable passed from background.js file
    //and store into a blocked scope variable called term
    let term = location.hash.slice(1);

    //query selector will return the frame element in the index.html file
    //and set the content of the frame with the Cambridge dictionary web page with the term searched
    document.querySelector("#dictionary-frame").src = "https://dictionary.cambridge.org/dictionary/english/" + term;
}

main();