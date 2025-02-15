import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  template: `
    <section id="about" class="bg-black text-white py-16">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-8">Sobre Mi</h2>
        <p class="max-w-2xl mx-auto">
          Soy una desarrolladora Full Stack Web apasionada por crear soluciones
          digitales y funcionales. Con experiencia en una amplia gama de
          tecnologías tanto en el frontend como en el backend.
          <br />
          A continuacion podras observar algunos de los proyectos realizados
        </p>
      </div>
    </section>
  `,
})
export class AboutComponent {}
