<?php
// --- MENÚ INSTITUCIONAL ---
// Incluye el logo oficial, el nombre y todos los botones principales y submenús.
?>
<nav id="navbar" class="navbar-institutional flex items-center px-8 py-4 shadow-lg">
    <div class="flex items-center space-x-3">
        <img src="images/Liga.png" alt="Logo Liga de Voleibol de Cundinamarca" class="h-14 w-14 object-contain rounded-xl shadow-md">
        <div>
            <span class="font-montserrat font-bold text-lg text-institutional-blue-deep">LIGA DE VOLEIBOL</span><br>
            <span class="font-montserrat font-semibold text-sm text-institutional-gold-elegant">CUNDINAMARCA</span>
        </div>
    </div>
    <ul class="flex-1 flex justify-end space-x-7 ml-8">
        <li><a href="index.php" class="menu-link">Inicio</a></li>
        <li><a href="nosotros.php" class="menu-link">Nosotros</a></li>
        <li><a href="competencias.php" class="menu-link">Competencias</a></li>
        <li><a href="deportistas.php" class="menu-link">Deportistas</a></li>
        <li><a href="entrenadores.php" class="menu-link">Entrenadores</a></li>
        <li><a href="jueces.php" class="menu-link">Jueces</a></li>
        <li><a href="clubes.php" class="menu-link">Clubes</a></li>
        <li><a href="cursos.php" class="menu-link">Cursos</a></li>
        <li class="relative group">
            <a href="servicios.php" class="menu-link">Servicios</a>
            <ul class="absolute left-0 mt-2 w-64 hidden group-hover:block bg-white shadow-xl rounded-xl p-4 z-50">
                <li><a href="#empresas" class="block py-2 px-4 hover:bg-institutional-gray-light rounded">Servicios para Empresas y Patrocinadores</a></li>
                <li><a href="#instituciones" class="block py-2 px-4 hover:bg-institutional-gray-light rounded">Servicios para Instituciones Públicas y Educativas</a></li>
                <li><a href="#padres" class="block py-2 px-4 hover:bg-institutional-gray-light rounded">Servicios para Padres de Familia</a></li>
            </ul>
        </li>
        <li><a href="contacto.php" class="menu-link"><span style="font-size:1.2em">📧</span> Contacto</a></li>
        <li><a href="registrarse.php" class="menu-link"><span style="font-size:1.2em">📝</span> Registrarse</a></li>
    </ul>
</nav>
