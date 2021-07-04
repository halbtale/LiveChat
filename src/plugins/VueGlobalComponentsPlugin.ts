import { camelCase, pascalCase } from "change-case";
import { App } from "vue";

type WebpackRequirer = { context };

export default (app: App<Element>): void => {
    /**
     * @constant
     * contains array of components matching components in view folder
     */

    const globallyImport = (requireComponent) =>
        requireComponent.keys().forEach((fileName: string) => {
            if (fileName.includes("_")) return;

            /**
             * @constant
             * contains config of selected components
             */

            const componentName = pascalCase(
                camelCase(
                    fileName
                        .split("/")
                        .pop()!
                        .replace(/\.\w+$/, ""),
                ),
            );
            const componentConfig = requireComponent(fileName);
            app.component(componentName, componentConfig.default || componentConfig);
        });

    globallyImport((require as unknown as WebpackRequirer).context("@/components", true, /[^.]+\.(vue)$/));
};
