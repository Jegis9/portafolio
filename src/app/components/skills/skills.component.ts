import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (skill of skills; track skill.id) {
          <div
            class="bg-white p-6 rounded-lg shadow-lg text-center  transition delay-150 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700"
          >
            <div
              class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">{{ skill.icon }}</span>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ skill.title }}</h3>
            <p class="mb-4">
              {{ skill.description }}
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
                *ngFor="let s of skill.skill.split(', ')"
                >{{ s }}</span
              >
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skills = [
    {
      id: 1,
      icon: "💻",
      title: "Desarrollo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      skill: "Html, Css, Js, Python, Php, Sql",
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Herramientas",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      skill: "Github, VsCode, Aws",
    },
    {
      id: 3,
      icon: "📚",
      title: "Aprendiendo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      skill: "Angular, TypeScript, Habilidades blandas",
    },
  ];
}
