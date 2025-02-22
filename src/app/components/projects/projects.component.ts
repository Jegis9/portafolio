import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-16 bg-cyan-400">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Mis proyectos</h2>
        <p class="text-center mb-8">Proyectos desarrollados</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
          <div class="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              [src]="project.image"
              [alt]="project.title"
              class="w-full h-64 object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="text-white text-center p-4">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="mb-4">{{ project.description }}</p>
                <p class="mb-4 underline">{{ project.stack }}</p>

                <a
                  [href]="project.github"
                  class="text-white hover:text-gray-300 mb-4 flex justify-center items-center"
                  target="_blank"
                >
                  <span class="sr-only">GitHub</span>

                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a
                  [href]="project.link"
                  class="inline-block px-6 py-2 bg-green-400 text-black rounded-full hover:bg-green-500"
                  target="_blank"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Punto de venta basico - en desarrollo",
      stack: "Filament, Laravel,Mysql",
      image: "img/laptop.avif",

      github: "https://github.com/Jegis9/punto-venta.git",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Sistema de gestion",
      stack:
        "Html, Css, Bootstrap, DataTable, SweeetAlert, Python, MySql,Cloudinary",
      image: "img/laptop2.avif",

      github: "https://github.com/Jegis9/Sistema-de-gestion.git",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Desarrollo frontend y backend de punto de venta",
      stack: "Html, Css, Bootstrap, SweeetAlert, Reguex,Sql server",
      image: "img/laptop3.avif",
      link: "https://jegis9.github.io/Frontend-Punto/",
      github: "https://github.com/Jegis9/punto-venta-ferreteria-basico.git",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Portafolio personal",
      stack: "Angular",
      image: "img/laptop4.avif",
      link: "https://jegis9.github.io/portafolio/",
      github: "https://github.com/Jegis9/portafolio.git",
    },
    {
      id: 5,
      title: "Proyecto 5",
      description: "Desarrollo frontend de SIM24",
      stack: "Html, Css, Bootstrap",
      image: "img/laptop5.avif",
      link: "https://jegis9.github.io/frontendSimposio/",
      github: "https://github.com/Jegis9/frontendSimposio.git",
    },
    {
      id: 6,
      title: "Proyecto 6",
      description: "Sistema de clinica",
      stack: "Html, Css, Bootstrap, Java, Mysql",
      image: "img/laptop5.avif",

      github: "https://github.com/Jegis9/Clinica-Java.git",
    },
    {
      id: 7,
      title: "Proyecto 7",
      description: "Desarrollo frontend de landing page de ferreteria",
      stack: "Html, Css, Bootstrap",
      image: "img/laptop5.avif",
      link: "https://jegis9.github.io/",
      github: "https://github.com/Jegis9/Jegis9.github.io.git",
    },
    {
      id: 8,
      title: "Proyecto 8",
      description: "Desarrollo frontend de landing page de hotel",
      stack: "Html, Css, Bootstrap",
      image: "img/laptop6.avif",
      link: "https://jegis9.github.io/hotel-landing/",
      github: "https://github.com/Jegis9/hotel-landing.git",
    },
    {
      id: 9,
      title: "Proyecto 9",
      description: "Consumo de api ",
      stack: "Express, Redis",
      image: "img/laptop6.avif",
      github: "https://github.com/Jegis9/express-y-redis.git",
    },
  ];
}
