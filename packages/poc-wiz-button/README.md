# \<wiz-button>

## Sobre a POC

Este webcomponent é uma extensão de do webcomponent [@lion/button](https://github.com/ing-bank/lion/tree/master/packages/button).

Lion é uma biblioteca de webcomponents desenvolvidos pelo ING com fôco em peformance, acessibilidade e flexibilidade. [Leia mais sorbe a bilblioteca no GitHub](https://github.com/ing-bank/lion#lion-web-components).

O webcomponent `<wiz-button>` segue as recomendações da [open-wc](https://github.com/open-wc/open-wc) e foi inicializado com seu gerador de componentes: `npm init @open-wc`.

Para extender o webcomponent do lion bastou importar e extendê-lo e sobrescrever a função `get styles()`. Veja `src/WizButton.ts`.

```javascript
import { LionButton } from '@lion/button';
export class WizButton extends LionButton {
    static get styles() {
        return [
            super.styles,
            css `
        .btn {
            background: var(--wiz-button-primary, rgb(245, 108, 0));
            color: rgb(255, 255, 255);
            font-family: 'Roboto', sans-serif;
            font-size: small;
            border-radius: 5px;
        }

        :host(:hover) .btn {
            background: var(--wiz-button-background-hover, rgb(255, 145, 0));
        }

        :host(:focus:not([disabled])) .btn {
            outline: none;
          }

        :host(:active) .btn, /* keep native :active to render quickly where possible */
        :host([active]) .btn /* use custom [active] to fix IE11 */ {
            background: var(--wiz-button-background-clicked, rgb(255, 173, 66));
        }
    `
        ];
    }
}
```



## Uso em aplicações Angular

1. Incluir `CUSTOM_ELEMENTS_SCHEMA` nos módulos que usam o componente.
2. `import 'wiz-button/dist/wiz-button.js'` nos módulos que usam o componente.

Exemplo:
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import 'wiz-button/dist/wiz-button.js'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
```

E no template do componente:
```html
<wiz-button>Wiz Button</wiz-button>
```

---------------


## Installation
```bash
npm i wiz-button
```

## Usage
```html
<script type="module">
  import 'wiz-button/dist/wiz-button.js';
</script>

<wiz-button></wiz-button>
```

## Testing
To run the suite of tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
