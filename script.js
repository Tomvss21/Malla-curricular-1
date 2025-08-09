document.addEventListener('DOMContentLoaded', () => {

    const ramos = [
        // Semestre 1
        { id: 'IND-111', nombre: 'Álgebra', creditos: 6, semestre: 1, prerequisitos: [] },
        { id: 'IND-112', nombre: 'Cálculo I', creditos: 6, semestre: 1, prerequisitos: [] },
        { id: 'IND-113', nombre: 'Com. en Ingeniería', creditos: 6, semestre: 1, prerequisitos: [] },
        { id: 'IND-114', nombre: 'Introducción Ingeniería', creditos: 6, semestre: 1, prerequisitos: [] },
        { id: 'IFG-100', nombre: 'Inglés I', creditos: 3, semestre: 1, prerequisitos: [] },
        // Semestre 2
        { id: 'IND-121', nombre: 'Álgebra Lineal', creditos: 6, semestre: 2, prerequisitos: ['IND-111'] },
        { id: 'IND-122', nombre: 'Cálculo II', creditos: 6, semestre: 2, prerequisitos: ['IND-112'] },
        { id: 'IND-123', nombre: 'Química', creditos: 6, semestre: 2, prerequisitos: ['IND-113'] },
        { id: 'IND-124', nombre: 'Computac. I', creditos: 6, semestre: 2, prerequisitos: [] },
        { id: 'IFG-200', nombre: 'Inglés II', creditos: 3, semestre: 2, prerequisitos: ['IFG-100'] },
        // Semestre 3
        { id: 'IND-213', nombre: 'Prob. y Estadística', creditos: 6, semestre: 3, prerequisitos: ['IND-121'] },
        { id: 'IND-211', nombre: 'Cálculo III', creditos: 6, semestre: 3, prerequisitos: ['IND-122'] },
        { id: 'IND-212', nombre: 'Física I', creditos: 6, semestre: 3, prerequisitos: ['IND-112'] },
        { id: 'IND-214', nombre: 'Computac. II', creditos: 6, semestre: 3, prerequisitos: ['IND-124'] },
        { id: 'IFG-300', nombre: 'Inglés III', creditos: 3, semestre: 3, prerequisitos: ['IFG-200'] },
        // Semestre 4
        { id: 'IND-223', nombre: 'Análisis Multivariado', creditos: 6, semestre: 4, prerequisitos: ['IND-213'] },
        { id: 'IND-221', nombre: 'Ecuaciones Diferenciales', creditos: 6, semestre: 4, prerequisitos: ['IND-211'] },
        { id: 'IND-222', nombre: 'Física II', creditos: 6, semestre: 4, prerequisitos: ['IND-212'] },
        { id: 'IND-334', nombre: 'Módulo Integ. CC.BB.', creditos: 6, semestre: 4, prerequisitos: ['IND-213' , 'IND-214' , 'IND-211' , 'IFG-300' , 'IND-212'] },
        // Semestre 5
        { id: 'IND-311', nombre: 'M. M. y Estocástico', creditos: 6, semestre: 5, prerequisitos: ['IND-223'] },
        { id: 'IND-313', nombre: 'Diseño Ind. y Dib. Tec.', creditos: 6, semestre: 5, prerequisitos: [] },
        { id: 'IND-312', nombre: 'Termodinám.', creditos: 6, semestre: 5, prerequisitos: ['IND-222'] },
        { id: 'IND-314', nombre: 'Adm. y RRHH', creditos: 6, semestre: 5, prerequisitos: [] },
        { id: 'MFG-114', nombre: 'Introducción a la Fe', creditos: 3, semestre: 5, prerequisitos: [] },
        // Semestre 6
        { id: 'IND-322', nombre: 'Logística', creditos: 6, semestre: 6, prerequisitos: ['IND-311'] },
        { id: 'IND-321', nombre: 'Elect. Ind. y Automatiz.', creditos: 6, semestre: 6, prerequisitos: ['IND-313'] },
        { id: 'IND-324', nombre: 'Contab. y Finanzas', creditos: 6, semestre: 6, prerequisitos: [] },
        { id: 'IND-323', nombre: 'Economía', creditos: 6, semestre: 6, prerequisitos: ['IND-314'] },
        { id: 'IND-325', nombre: 'Base de Datos', creditos: 4, semestre: 6, prerequisitos: ['IND-214'] },
        { id: 'MFG-214', nombre: 'Ética Cristiana', creditos: 3, semestre: 6, prerequisitos: ['MFG-114'] },
        // Semestre 7
        { id: 'IND-411', nombre: 'Investiga. Operaciones', creditos: 6, semestre: 7, prerequisitos: ['IND-311'] },
        { id: 'IND-412', nombre: 'Procesos Industriales', creditos: 6, semestre: 7, prerequisitos: ['IND-313'] },
        { id: 'IND-413', nombre: 'Emprend. y Creación Empresas', creditos: 6, semestre: 7, prerequisitos: [] },
        { id: 'IND-414', nombre: 'Ingeniería Económica', creditos: 6, semestre: 7, prerequisitos: ['IND-323'] },
        { id: 'IND-415', nombre: 'Metodología Investigac.', creditos: 6, semestre: 7, prerequisitos: [] }, // Prerrequisito H1
        // Semestre 8
        { id: 'IND-421', nombre: 'Gestión de Operaciones', creditos: 6, semestre: 8, prerequisitos: ['IND-411'] },
        { id: 'IND-422', nombre: 'Control de Gestión', creditos: 6, semestre: 8, prerequisitos: ['IND-412'] },
        { id: 'IND-423', nombre: 'Des. Personal y Liderazgo', creditos: 3, semestre: 8, prerequisitos: ['IND-413'] },
        { id: 'IND-424', nombre: 'Creatividad Prototipos Negocios', creditos: 4, semestre: 8, prerequisitos: ['IND-414'] },
        { id: 'IND-425', nombre: 'Módulo Integ. Lic. (Práctica 1)', creditos: 10, semestre: 8, prerequisitos: ['IND-411' , 'IND-412' , 'IND-413' , 'IND-414' , 'IND-415'] },
        { id: 'CFG', nombre: 'Certificación CFG I', creditos: 5, semestre: 8, prerequisitos: [] },
        // Semestre 9
        { id: 'IND-511', nombre: 'Optimiza.', creditos: 6, semestre: 9, prerequisitos: ['IND-421'] },
        { id: 'IND-512', nombre: 'Gestión Información', creditos: 6, semestre: 9, prerequisitos: ['IND-422'] },
        { id: 'IND-513', nombre: 'Formal. y Ev. de Proyectos', creditos: 3, semestre: 9, prerequisitos: ['IND-414'] },
        { id: 'IND-514', nombre: 'Propiedad Intelectual', creditos: 6, semestre: 9, prerequisitos: [] },
        { id: 'IND-515', nombre: 'Marketing Estrat. Comer. Tec.', creditos: 5, semestre: 9, prerequisitos: [] }, // Prerrequisito H2
        { id: 'CFG2', nombre: 'Certificación II', creditos: 5, semestre: 9, prerequisitos: ['CFG'] },
        // Semestre 10
        { id: 'IND-521', nombre: 'Gestión Calidad Prod.', creditos: 6, semestre: 10, prerequisitos: ['IND-412'] },
        { id: 'IND-522', nombre: 'Electivo Ev. Proyectos', creditos: 6, semestre: 10, prerequisitos: [] },
        { id: 'IND-523', nombre: 'Plan. Estrat. y Gestión Negocios', creditos: 6, semestre: 10, prerequisitos: [] },
        { id: 'IND-524', nombre: 'Gestión Proyectos I+D+e', creditos: 6, semestre: 10, prerequisitos: ['IND-514'] },
        { id: 'IND-525', nombre: 'Inteligencia Comp. y Vig. Tec.', creditos: 5, semestre: 10, prerequisitos: [] },
        { id: 'CFG3', nombre: 'Certificación III', creditos: 5, semestre: 10, prerequisitos: ['CFG2'] },
        // Semestre 11
        { id: 'IND-611', nombre: 'Electivo G. Oper. y Proc. Indu.', creditos: 6, semestre: 11, prerequisitos: [] },
        { id: 'IND-612', nombre: 'Electivo Gestión Negocios', creditos: 6, semestre: 11, prerequisitos: [] },
        { id: 'IND-613', nombre: 'Módulo Integrador Formación Profesional', creditos: 18, semestre: 11, prerequisitos: ['IND-521', 'IND-523', 'IND-524' , 'IND-525'] }, // Prerrequisito H3
    ];
    
    let aprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobadosUCM')) || []);
    const container = document.getElementById('malla-curricular');
    const resetButton = document.getElementById('resetButton');

    const renderizarMalla = () => {
        container.innerHTML = '';
        const maxSemestre = Math.max(...ramos.map(r => r.semestre));

        for (let i = 1; i <= maxSemestre; i++) {
            const columna = document.createElement('div');
            columna.className = 'semestre-columna';
            
            const titulo = document.createElement('div');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `Semestre ${i}`;
            columna.appendChild(titulo);

            const ramosSemestre = ramos.filter(ramo => ramo.semestre === i);
            ramosSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.dataset.id = ramo.id;
                ramoDiv.innerHTML = `
                    <p class="ramo-nombre">${ramo.nombre}</p>
                    <p class="ramo-codigo">${ramo.id} (${ramo.creditos} cr)</p>
                `;
                ramoDiv.addEventListener('click', () => toggleAprobado(ramo));
                columna.appendChild(ramoDiv);
            });
            container.appendChild(columna);
        }
        actualizarEstadoVisual();
    };

    const actualizarEstadoVisual = () => {
        ramos.forEach(ramo => {
            const div = document.querySelector(`.ramo[data-id='${ramo.id}']`);
            if (!div) return;

            div.classList.remove('aprobado', 'bloqueado');
            
            if (aprobados.has(ramo.id)) {
                div.classList.add('aprobado');
            } else {
                const requisitosFaltantes = verificarRequisitos(ramo);
                if (requisitosFaltantes.length > 0) {
                    div.classList.add('bloqueado');
                    div.title = `Bloqueado. Requisitos pendientes: ${requisitosFaltantes.join(', ')}`;
                }
            }
        });
    };

    const verificarRequisitos = (ramo) => {
        const faltantes = [];
        for (const reqId of ramo.prerequisitos) {
            if (!aprobados.has(reqId)) {
                const reqRamo = ramos.find(r => r.id === reqId);
                faltantes.push(reqRamo ? reqRamo.nombre : reqId);
            }
        }
        return faltantes;
    };

    const toggleAprobado = (ramo) => {
        if (aprobados.has(ramo.id)) {
            aprobados.delete(ramo.id);
        } else {
            const requisitosFaltantes = verificarRequisitos(ramo);
            if (requisitosFaltantes.length > 0) {
                alert(`No puedes marcar este ramo como aprobado.\nDebes aprobar primero: \n\n• ${requisitosFaltantes.join('\n• ')}`);
                return;
            }
            aprobados.add(ramo.id);
        }
        guardarProgreso();
        actualizarEstadoVisual();
    };

    const guardarProgreso = () => {
        localStorage.setItem('ramosAprobadosUCM', JSON.stringify(Array.from(aprobados)));
    };

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres limpiar todo tu progreso? Esta acción no se puede deshacer.')) {
            aprobados.clear();
            guardarProgreso();
            actualizarEstadoVisual();
        }
    });

    // Iniciar la aplicación
    renderizarMalla();
});
