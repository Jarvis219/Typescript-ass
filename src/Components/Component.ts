import { Icomponet } from "./IComponet.js";

export abstract class Component implements Icomponet {
    public async render() {
        document.getElementById('wrapper')!.innerHTML = await this.template();
        await this.afterRender();
    }
    public abstract  template(): string;
    public abstract afterRender(): void;
}
