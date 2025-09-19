fetch("https://whatyearisit-backend-sooty-psi.vercel.app/year")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#year").textContent += data.year.stringify();
  });
