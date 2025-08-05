<?php include 'menu.php'; ?>
<main>
    <section style="height: 80vh; position: relative;">
        <!-- Carrusel de imágenes automático -->
        <div id="carrusel" style="height:100%;width:100%;overflow:hidden;position:relative;">
            <?php
            for ($i = 1; $i <= 45; $i++) {
                echo "<img src='carrusel/{$i}.jpg' class='carrusel-img' style='display:none;width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;'>";
            }
            ?>
        </div>
        <!-- Logo arriba a la derecha, visible y grande -->
        <img src="images/Liga.png" alt="Logo Liga" style="position:absolute;top:32px;right:36px;z-index:10;width:110px;height:auto;">
    </section>
    <script>
    // Carrusel sencillo en JS puro
    let actual = 0;
    const imgs = document.querySelectorAll('.carrusel-img');
    function mostrarCarrusel(){
        imgs.forEach((img, i) => img.style.display = (i===actual)?'block':'none');
        actual = (actual + 1) % imgs.length;
    }
    if(imgs.length) {
        mostrarCarrusel();
        setInterval(mostrarCarrusel, 3200);
    }
    </script>
</main>
<?php include 'footer.php'; ?>
