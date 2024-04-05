class movie {
    constructor(title = "Beast", studio = "7 screen studio", rartings = "PG") {
      this.title = title;
      this.studio = studio;
      this.rartings = rartings;
    }
    static getpg(rating) {
      return rating.filter((rating) => rating.rartings === "PG");
    }
  }
  const movie1 = new movie();
  const movie2 = new movie("master", "7 screenstudio", "PG13");
  const movie3 = new movie("varisu", "7 screenstudio");
  const movie4 = new movie("Leo", "sun pictures", "R");
  const movie5 = new movie("Casino Royale", "Eon Productions", "PG­13");
  const movie6 = [
    new movie("Casino Royale", "Eon Productions", "PG­13"),
    new movie("love today", "Green Studio", "R"),
    new movie("conjouring kannapan"),
    new movie("Ayalan", "7screen", "PG"),
    new movie("captain miller", "sun pictures", "PG13"),
  ];
  
  const pgmovie = movie.getpg(movie6);
  
  console.log(movie1);
  console.log(movie2);
  console.log(movie3);
  console.log(movie4);
  console.log(movie5);
  console.log( "--PG MOVIES--");
  console.log(pgmovie);