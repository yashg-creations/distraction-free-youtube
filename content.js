console.log("Running Distraction Free YouTube Extension");

const removeHomepageSuggestions = () => {
    document.querySelector('ytd-browse').remove();
}

removeHomepageSuggestions();