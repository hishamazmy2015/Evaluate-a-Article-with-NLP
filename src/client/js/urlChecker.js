const validURL = (str)=>{
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
    let regex = new RegExp(expression);
    if (!str.match(regex)) {	
      alert("Please enter a valid URL.");
      return false;
    }
    else {
      return true;
    }
}

module.exports = validURL;
// export { validURL }
