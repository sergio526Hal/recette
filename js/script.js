document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     MENU MOBILE
  ===================================================== */

  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

      menu.classList.toggle("active");

      if (menu.classList.contains("active")) {

        menuBtn.textContent = "✕";
        menuBtn.setAttribute(
          "aria-label",
          "Fermer le menu"
        );

      } else {

        menuBtn.textContent = "☰";
        menuBtn.setAttribute(
          "aria-label",
          "Ouvrir le menu"
        );

      }

    });


    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {

      link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
          "aria-label",
          "Ouvrir le menu"
        );

      });

    });

  }


  /* =====================================================
     RECETTES
  ===================================================== */

  const recipes = {

    /* -------------------------------------------------
       SALADE
    ------------------------------------------------- */

    salade: {

      category: "Frais & léger",

      title: "Salade méditerranéenne",

      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",

      time: "15 minutes",

      persons: "2 personnes",

      ingredients: [

        "1 salade verte",

        "2 tomates",

        "1 concombre",

        "100 g de feta",

        "50 g d'olives noires",

        "2 cuillères à soupe d'huile d'olive",

        "1 cuillère à soupe de jus de citron",

        "Sel et poivre"

      ],

      preparation: [

        "Lavez soigneusement la salade, les tomates et le concombre.",

        "Coupez les tomates et le concombre en petits morceaux.",

        "Disposez la salade dans un grand saladier.",

        "Ajoutez les tomates, le concombre, la feta et les olives.",

        "Mélangez l'huile d'olive avec le jus de citron, le sel et le poivre.",

        "Versez la sauce sur la salade et mélangez délicatement.",

        "Servez immédiatement."

      ]

    },



    pates: {

      category: "Déjeuner",

      title: "Pâtes crémeuses",

      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",

      time: "25 minutes",

      persons: "2 personnes",

      ingredients: [

        "200 g de pâtes",

        "150 ml de crème fraîche",

        "1 gousse d'ail",

        "50 g de parmesan râpé",

        "1 cuillère à soupe d'huile d'olive",

        "Sel",

        "Poivre",

        "Persil frais"

      ],

      preparation: [

        "Faites cuire les pâtes dans une grande casserole d'eau salée.",

        "Égouttez les pâtes en conservant un peu d'eau de cuisson.",

        "Faites chauffer l'huile d'olive dans une poêle.",

        "Ajoutez l'ail haché et faites revenir quelques secondes.",

        "Ajoutez la crème fraîche et laissez chauffer doucement.",

        "Ajoutez le parmesan et mélangez jusqu'à obtenir une sauce crémeuse.",

        "Ajoutez les pâtes et mélangez bien.",

        "Salez, poivrez et ajoutez un peu de persil avant de servir."

      ]

    },


    dessert: {

      category: "Gourmand",

      title: "Dessert maison",

      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",

      time: "35 minutes",

      persons: "4 personnes",

      ingredients: [

        "200 g de farine",

        "100 g de sucre",

        "2 œufs",

        "100 g de beurre",

        "1 cuillère à café de levure",

        "1 sachet de sucre vanillé",

        "100 ml de lait"

      ],

      preparation: [

        "Préchauffez le four à 180°C.",

        "Faites fondre le beurre puis laissez-le légèrement refroidir.",

        "Mélangez les œufs avec le sucre et le sucre vanillé.",

        "Ajoutez le beurre fondu et le lait.",

        "Incorporez progressivement la farine et la levure.",

        "Versez la préparation dans un moule.",

        "Faites cuire pendant environ 25 minutes.",

        "Laissez refroidir avant de servir."

      ]

    },


    bowl: {

      category: "Sain",

      title: "Bowl de légumes",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",

      time: "30 minutes",

      persons: "2 personnes",

      ingredients: [

        "150 g de riz",

        "1 carotte",

        "1 avocat",

        "1/2 concombre",

        "100 g de tomates cerises",

        "80 g de maïs",

        "2 cuillères à soupe d'huile d'olive",

        "Jus d'un demi-citron",

        "Sel et poivre"

      ],

      preparation: [

        "Faites cuire le riz selon les indications du paquet.",

        "Épluchez et râpez la carotte.",

        "Coupez l'avocat et le concombre en morceaux.",

        "Coupez les tomates cerises en deux.",

        "Disposez le riz dans deux bols.",

        "Ajoutez les légumes, l'avocat et le maïs.",

        "Préparez une sauce avec l'huile d'olive et le citron.",

        "Ajoutez la sauce, salez, poivrez et servez."

      ]

    },



    pizza: {

      category: "Familial",

      title: "Pizza maison",

      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",

      time: "45 minutes",

      persons: "2 à 3 personnes",

      ingredients: [

        "250 g de farine",

        "150 ml d'eau tiède",

        "1 sachet de levure boulangère",

        "1 cuillère à soupe d'huile d'olive",

        "150 g de sauce tomate",

        "150 g de mozzarella",

        "Jambon ou légumes selon votre choix",

        "Sel",

        "Origan"

      ],

      preparation: [

        "Mélangez la farine, la levure et une pincée de sel.",

        "Ajoutez progressivement l'eau tiède et l'huile d'olive.",

        "Pétrissez jusqu'à obtenir une pâte souple.",

        "Laissez reposer la pâte environ 30 minutes.",

        "Étalez la pâte sur une plaque de cuisson.",

        "Ajoutez la sauce tomate, la mozzarella et la garniture.",

        "Saupoudrez d'origan.",

        "Faites cuire dans un four préchauffé à 220°C pendant environ 15 minutes."

      ]

    },



    legumes: {

      category: "Simple & rapide",

      title: "Plat de légumes",

      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",

      time: "30 minutes",

      persons: "3 personnes",

      ingredients: [

        "2 carottes",

        "1 courgette",

        "1 poivron",

        "1 oignon",

        "2 tomates",

        "2 cuillères à soupe d'huile d'olive",

        "1 gousse d'ail",

        "Sel",

        "Poivre",

        "Herbes de Provence"

      ],

      preparation: [

        "Lavez et découpez tous les légumes.",

        "Émincez l'oignon et l'ail.",

        "Faites chauffer l'huile d'olive dans une grande poêle.",

        "Faites revenir l'oignon et l'ail.",

        "Ajoutez les carottes et laissez cuire quelques minutes.",

        "Ajoutez ensuite la courgette, le poivron et les tomates.",

        "Assaisonnez avec le sel, le poivre et les herbes.",

        "Laissez mijoter environ 15 minutes.",

        "Servez chaud avec du riz ou du pain."

      ]

    }

  };



  const recipeButtons =
    document.querySelectorAll(".details");

  const recipeContent =
    document.getElementById("recipeContent");


  recipeButtons.forEach(button => {

    button.addEventListener("click", () => {

      const recipeId =
        button.dataset.recipe;

      const recipe =
        recipes[recipeId];


      if (!recipe || !recipeContent) {

        return;

      }



      recipeButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      button.classList.add("active");



      const ingredientsHTML =
        recipe.ingredients
          .map(ingredient => `
            <li>
              ${ingredient}
            </li>
          `)
          .join("");


      const preparationHTML =
        recipe.preparation
          .map((step, index) => `
            <div class="recipe-step">

              <span class="recipe-step-number">
                ${index + 1}
              </span>

              <p>
                ${step}
              </p>

            </div>
          `)
          .join("");


      recipeContent.innerHTML = `

        <div class="recipe-content-inner">


          <!-- IMAGE -->

          <div class="recipe-content-image">

            <img
              src="${recipe.image}"
              alt="${recipe.title}"
            >

          </div>


          <!-- INFORMATIONS -->

          <div class="recipe-content-body">


            <span class="recipe-category">

              ${recipe.category}

            </span>


            <h2>

              ${recipe.title}

            </h2>


            <div class="recipe-meta">


              <span>

                ⏱ ${recipe.time}

              </span>


              <span>

                👥 ${recipe.persons}

              </span>


            </div>


            <h3>

              Ingrédients

            </h3>


            <ul class="recipe-ingredients">

              ${ingredientsHTML}

            </ul>


            <h3>

              Préparation

            </h3>


            <div class="recipe-steps">

              ${preparationHTML}

            </div>


          </div>


        </div>

      `;


      recipeContent.classList.add("active");

      setTimeout(() => {

        recipeContent.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }, 100);

    });

  });

  const contactForm =
    document.getElementById("contactForm");

  const formMessage =
    document.getElementById("formMessage");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        const submitButton =
          contactForm.querySelector(
            "button[type='submit']"
          );


        if (!submitButton) {

          return;

        }



        submitButton.disabled = true;

        submitButton.textContent =
          "Envoi en cours...";


        if (formMessage) {

          formMessage.textContent = "";

        }


        try {

          const response =
            await fetch(
              contactForm.action,
              {
                method: "POST",

                body:
                  new FormData(contactForm),

                headers: {
                  "Accept":
                    "application/json"
                }
              }
            );



          if (response.ok) {

            if (formMessage) {

              formMessage.textContent =
                "✓ Message envoyé avec succès !";

              formMessage.style.color =
                "#3d7650";

            }

            contactForm.reset();


          } else {


            if (formMessage) {

              formMessage.textContent =
                "Une erreur est survenue. Veuillez réessayer.";

              formMessage.style.color =
                "#b33a3a";

            }

          }


        } catch (error) {

          if (formMessage) {

            formMessage.textContent =
              "Impossible d'envoyer le message.";

            formMessage.style.color =
              "#b33a3a";

          }

        }

        submitButton.disabled = false;

        submitButton.textContent =
          "Envoyer le message";

      }
    );

  }

});