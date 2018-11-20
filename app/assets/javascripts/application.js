// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require jquery_ujs
//= require_tree .

jQuery( document ).ready(function() {

  /* MISE EN PLACE ONGLETS */

	/* On surveille les clic sur les liens du musique */
	jQuery('#tab-nav a').click(function(e){
		/* On désactive l'action par défaut des liens */
		e.preventDefault();
		/* On récupère la valeur de l'onglet à activer */
		var tab = jQuery(this).data('tab');
		/* On masque tous les contenus */
		jQuery('.tab').removeClass('tab-active');
		/* On affiche le contenu qui doit l'être */
		jQuery('#'+tab).addClass('tab-active');
		/* On désactive tous les onglets */
		jQuery('#tab-nav a').removeClass('tab-nav-active');
		/* On active l'onglet qui a été cliqué */
		jQuery(this).addClass('tab-nav-active');
     });

    /* MISE EN PLACE CARROUSEL */
    var $carousel = $('#carousel'), // on cible le bloc du carrousel
         $img = $('#carousel img'), // on cible les images contenues dans le carrousel
         indexImg = $img.length - 1, // on définit l'index du dernier élément
         i = 0, // on initialise un compteur
         $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

    /* Mise en place fonction "précédent" */
    jQuery("#prev").click(function(e){
      e.preventDefault();
      if( i >= 0 ){
        i--; // on incrémente le compteur
        $img.css('display', 'none'); // on cache les image
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
      }
      else{
        i = 0;
      }
     });

     /* Mise en place fonction "suivante" */
     jQuery("#next").click(function(e){
       e.preventDefault();
       if( i <= indexImg ){
         i++; // on incrémente le compteur
         $img.css('display', 'none'); // on cache les image
         $currentImg = $img.eq(i); // on définit la nouvelle image
         $currentImg.css('display', 'block'); // puis on l'affiche
     }
        else{
          i = indexImg;
    }
      });

      /* MISE EN PLACE CERCLES NAVIGATION */
      jQuery('.circle1').click(function(e){
        e.preventDefault();

        $img.css('display', 'none'); // on cache les image
        $currentImg = $img.eq(0); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche

      });

      jQuery('#circle2').click(function(e){
         e.preventDefault();

         $img.css('display', 'none'); // on cache les image
         $currentImg = $img.eq(1); // on définit la nouvelle image
         $currentImg.css('display', 'block'); // puis on l'affiche

      });

      jQuery('#circle3').click(function(e){
        e.preventDefault();

          $img.css('display', 'none'); // on cache les image
          $currentImg = $img.eq(2); // on définit la nouvelle image
          $currentImg.css('display', 'block'); // puis on l'affiche

      });

      /* MISE EN PLACE SLIDESHOW AUTOMATIQUE */
    function slideImg(){
      setTimeout(function(){ // on utilise une fonction anonyme

        if(i < indexImg){ // si le compteur est inférieur au dernier index
      	    i++; // on l'incrémente
      	}
      	else{ // sinon, on le remet à 0 (première image)
      	    i = 0;
      	}

      	$img.css('display', 'none');
      	$currentImg = $img.eq(i);
      	$currentImg.css('display', 'block');

      	slideImg(); // on oublie pas de relancer la fonction à la fin

      }, 5000); // on définit l'intervalle à 7000 millisecondes (7s)
      }

      slideImg(); // enfin, on lance la fonction une première fois

});
