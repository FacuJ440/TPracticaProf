import type { CardType } from "@/types/CardType";

export const cardData: CardType[] = [
  {
    id: 1,
    image: "src/assets/produccion.png",
    title: "Técnico Superior en Gestión de Energías Renovables",
    description:
      "Capacitación en energías limpias, eficiencia energética y sostenibilidad ambiental aplicada a entornos productivos.",
    actions: [
      {
        label: "Perfil Profesional",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <p>
              El <strong>Técnico Superior en Gestión de Energías Renovables</strong> está
              capacitado para manifestar conocimientos, habilidades, destrezas, valores y
              actitudes en situaciones reales de trabajo, conforme a criterios de
              profesionalidad propios de su área y responsabilidad social al:
            </p>
            <ul>
              <li>Diseñar, proyectar, evaluar y gestionar la instalación de sistemas de aprovechamiento de energías renovables.</li>
              <li>Implementar, mantener y mejorar un sistema de aprovechamiento energético.</li>
              <li>Operar y mantener componentes, equipos e instalaciones de energías renovables, uso racional y eficiencia energética teniendo en cuenta condiciones de higiene y seguridad en el trabajo y las normas de calidad medioambientales.</li>
              <li>Gestionar los recursos necesarios para desarrollar las actividades de la organización.</li>
              <li>Interactuar con los diferentes roles ocupacionales y áreas organizacionales.</li>
              <li>Generar propuestas innovadoras y/o emprendimientos productivos propios del ámbito de la gestión de energías renovables, uso racional y eficiencia energética.</li>
            </ul>
          </div>
        `,
      },
      {
        label: "Plan de Estudios",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th class="text-left p-2 border-b">Año</th>
                    <th class="text-left p-2 border-b">Cuatrimestre</th>
                    <th class="text-left p-2 border-b">Espacios Curriculares</th>
                    <th class="text-left p-2 border-b">HCS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border-b align-top">1°</td>
                    <td class="p-2 border-b align-top">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Comprensión y Producción de Textos</li>
                        <li>Contexto Socioeconómico Productivo</li>
                        <li>Matemática Aplicada</li>
                        <li>Física Aplicada</li>
                        <li>Energías Renovables</li>
                        <li>Electrotecnia General</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">3, 3, 4, 4, 4, 4</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b align-top">1°</td>
                    <td class="p-2 border-b align-top">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Química Aplicada</li>
                        <li>Inglés Técnico</li>
                        <li>Energía Solar Térmica</li>
                        <li>Instalaciones Eléctricas</li>
                        <li>Práctica Profesionalizante I</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">3, 3, 4, 4, 8</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b align-top">2°</td>
                    <td class="p-2 border-b align-top">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Tecnología de la Representación Gráfica</li>
                        <li>Informática Aplicada</li>
                        <li>Energía Solar Fotovoltaica</li>
                        <li>Energía de la Biomasa</li>
                        <li>Práctica Profesionalizante II</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">3, 3, 4, 4, 8</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b align-top">2°</td>
                    <td class="p-2 border-b align-top">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Marco Jurídico</li>
                        <li>Energía Eólica</li>
                        <li>Energía Minihidráulica y Geotérmica</li>
                        <li>Uso Racional de la Energía</li>
                        <li>Práctica Profesionalizante III</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">3, 4, 4, 4, 10</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b align-top">3°</td>
                    <td class="p-2 border-b align-top">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Gestión de Seguridad, Salud Ocupacional y Medioambiente</li>
                        <li>Gestión de la Operación de Centrales de Energías Renovables</li>
                        <li>Arquitectura Bioclimática</li>
                        <li>Práctica Profesionalizante IV</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">4, 4, 4, 12</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b align-top">3°</td>
                    <td class="p-2 border-b align-top">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Ética Profesional y Deontología</li>
                        <li>Gestión de Proyectos de Inversión</li>
                        <li>Práctica Profesionalizante V</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b align-top">3, 4, 14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      },
    ],
  },

  {
    id: 2,
    image: "src/assets/desarrollo_soft.png",
    title: "Técnico Superior en Desarrollo de Software",
    description:
      "Formación práctica y teórica en desarrollo de software, programación, redes y soporte técnico.",
    actions: [
      {
        label: "Perfil Profesional",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <p>
              El Técnico Superior en Desarrollo de Software está formado para:
            </p>
            <ul>
              <li>Analizar requerimientos y diseñar soluciones de software.</li>
              <li>Desarrollar aplicaciones web y móviles utilizando buenas prácticas.</li>
              <li>Implementar y mantener sistemas, realizar pruebas y asegurar la calidad.</li>
              <li>Trabajar en equipos multidisciplinares y aplicar metodologías ágiles.</li>
            </ul>
            <p><strong>Salida laboral:</strong> desarrollador frontend/backend, QA, soporte, analista funcional.</p>
          </div>
        `,
      },
      {
        label: "Plan de Estudios",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <h3>Desarrollo de Software</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th class="text-left p-2 border-b">Año</th>
                    <th class="text-left p-2 border-b">Cuatrimestre</th>
                    <th class="text-left p-2 border-b">Espacios Curriculares</th>
                    <th class="text-left p-2 border-b">HCS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border-b">1°</td>
                    <td class="p-2 border-b">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Introducción a la Programación</li>
                        <li>Matemática Aplicada</li>
                        <li>Arquitectura de Computadoras</li>
                        <li>Base de Datos I</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4, 4</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">1°</td>
                    <td class="p-2 border-b">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Estructuras de Datos</li>
                        <li>Programación Web I</li>
                        <li>Sistemas Operativos</li>
                        <li>Práctica Profesionalizante I</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4, 6</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">2°</td>
                    <td class="p-2 border-b">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Programación Avanzada</li>
                        <li>Base de Datos II</li>
                        <li>Programación Web II</li>
                        <li>Práctica Profesionalizante II</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4, 8</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">2°</td>
                    <td class="p-2 border-b">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>DevOps y CI/CD</li>
                        <li>Seguridad Informática</li>
                        <li>Gestión de Proyectos</li>
                        <li>Práctica Profesionalizante III</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4, 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      },
    ],
  },

  {
    id: 3,
    image: "src/assets/ciencia_datos.png",
    title: "Técnico Superior en Ciencia de Datos e Inteligencia Artificial",
    description:
      "Formación en análisis de datos, machine learning y herramientas de inteligencia artificial aplicadas a distintos sectores.",
    actions: [
      {
        label: "Perfil Profesional",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <p>
              El Técnico Superior en Ciencia de Datos e IA está capacitado para:
            </p>
            <ul>
              <li>Recolectar, limpiar y procesar datos de distintas fuentes.</li>
              <li>Aplicar técnicas estadísticas y de machine learning para resolver problemas reales.</li>
              <li>Desarrollar modelos predictivos y sistemas de apoyo a la decisión.</li>
              <li>Visualizar resultados y comunicar conclusiones técnicas a audiencias no técnicas.</li>
            </ul>
            <p><strong>Ámbitos:</strong> salud, industria, comercio, investigación, startups.</p>
          </div>
        `,
      },
      {
        label: "Plan de Estudios",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <h3>Ciencia de Datos</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th class="text-left p-2 border-b">Año</th>
                    <th class="text-left p-2 border-b">Cuatrimestre</th>
                    <th class="text-left p-2 border-b">Espacios Curriculares</th>
                    <th class="text-left p-2 border-b">HCS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border-b">1°</td>
                    <td class="p-2 border-b">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Matemática y Estadística I</li>
                        <li>Introducción a la Programación</li>
                        <li>Fundamentos de Bases de Datos</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">1°</td>
                    <td class="p-2 border-b">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Estadística Aplicada</li>
                        <li>Programación para Ciencia de Datos</li>
                        <li>Visualización de Datos</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 4</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">2°</td>
                    <td class="p-2 border-b">1er.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Machine Learning I</li>
                        <li>Big Data y Pipelines</li>
                        <li>Práctica Profesionalizante I</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 6</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b">2°</td>
                    <td class="p-2 border-b">2do.</td>
                    <td class="p-2 border-b">
                      <ul class="list-disc pl-5">
                        <li>Machine Learning II</li>
                        <li>Modelado Predictivo</li>
                        <li>Proyecto Final / Práctica Profesionalizante II</li>
                      </ul>
                    </td>
                    <td class="p-2 border-b">4, 4, 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      },
    ],
  },

  {
    id: 4,
    image: "src/assets/diseno_grafico.png",
    title: "Cronograma de Actividades y Cursos disponibles",
    description:
      "Desarrollá habilidades en gestión empresarial, impresión 3D, liderazgo organizacional, entre otras...",
    actions: [
      {
        label: "Perfil Profesional",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <h3>Cursos y Actividades</h3>
            <p>
              Esta oferta incluye cursos cortos orientados a la práctica profesional: diseño gráfico, impresión 3D,
              gestión de proyectos y talleres de emprendimiento.
            </p>
            <ul>
              <li>Diseño gráfico aplicado a medios digitales e impresos.</li>
              <li>Taller de Impresión 3D y prototipado rápido.</li>
              <li>Gestión de proyectos y liderazgo básico para equipos.</li>
            </ul>
          </div>
        `,
      },
      {
        label: "Plan de Estudios",
        actionType: "modal",
        actionValue: `
          <div class="prose max-w-none">
            <h3>Cronograma y cursos disponibles</h3>
            <p><strong>Próximos cursos (fechas tentativas):</strong></p>
            <ul>
              <li>Diseño Básico: 4 semanas (comienza 01/03)</li>
              <li>Impresión 3D: 6 semanas (comienza 15/04)</li>
              <li>Taller de Emprendedores: 3 semanas (comienza 01/06)</li>
            </ul>
            <p>Para más información y pre-inscripción, completá el formulario institucional.</p>
          </div>
        `,
      },
    ],
  },
];
