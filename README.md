# Elias Dev — portfólio

Site pessoal de José Elias de Oliveira Lopes (Elias Dev): biografia, projetos e contato.
Publicado com GitHub Pages em https://joseeliasdeoliveiralopes-oss.github.io/portfolio/

## Estrutura

```
index.html              conteúdo (um arquivo só)
assets/css/style.css    tokens, componentes e seções
assets/js/main.js       fundo da barra de navegação ao rolar
assets/fonts/           Bricolage Grotesque e Newsreader (licença OFL), hospedadas aqui
assets/img/             retrato (duas larguras) e imagem de compartilhamento
```

Sem framework e sem etapa de build: abrir o `index.html` no navegador já funciona.

## Como editar

- **Texto, projetos e contato:** `index.html`. Cada seção tem um comentário no topo.
- **Cores e fontes:** variáveis no início de `assets/css/style.css` (`:root`).
- **Novo projeto na lista:** copie um `<li class="index__item">` dentro de "Sites, automação e vídeo".
- **Foto:** troque `assets/img/elias-1023.jpg` e `assets/img/elias-640.jpg` mantendo as proporções.

## Decisões de design

- Paleta tirada do retrato: noite, osso, aço e dourado (único acento, usado só em ações).
- Um único movimento: os três verbos da abertura sobem e a foto amanhece. Desligado com `prefers-reduced-motion`.
- Navegável por teclado, com foco visível, e responsivo de 360 px para cima.
