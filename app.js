async function main(){
    let term = location.hash.slice(1);

    document.querySelector("#dictionary-frame").src = "https://dictionary.cambridge.org/dictionary/english/" + term;
}

main();