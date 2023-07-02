import type { Plugin } from "rollup";
import { Project } from "ts-morph";
import kebabCase from "just-kebab-case";

export interface PluginOptions {
  customElementNamePrefix?: string;
  customElementProps?: string[];
}

export const externals = ["preact", "goober", "theme", "preact-custom-element"];

export const preact2webcomponents: (options: PluginOptions) => Plugin = ({
  customElementNamePrefix = "",
  customElementProps,
}) => {
  return {
    name: "preact-to-webcomponents",

    transform(code, path) {
      if (path.endsWith(".tsx")) {
        const project = new Project();

        project.addSourceFileAtPath(path);
        const sourceFile = project.getSourceFile(path)!;

        const componentName = Array.from(
          sourceFile.getExportedDeclarations().values()
        )
          .flat()
          .filter(
            (exportDeclaration) =>
              exportDeclaration
                .getType()
                .compilerType.getSymbol()
                ?.getName() === "FunctionComponent"
          )[0]
          .getSymbol()
          ?.getName();

        if (!componentName)
          throw new Error("typed FunctionComponent Component was not founded.");

        const customElementName =
          customElementNamePrefix + "-" + kebabCase(componentName);

        const sourceFileProps = sourceFile
          .getExportedDeclarations()
          .get("Props")
          ?.map((interfaceDeclaration) => {
            return interfaceDeclaration
              .getType()
              .getProperties()
              .map((property) => property.getName());
          })
          .flat();

        const props = (customElementProps ?? sourceFileProps ?? [])
          .flatMap((name) => `"${name}"`)
          .join(",");

        return {
          code: `
import register from "preact-custom-element";

${code}

register(${componentName}, ${customElementName}, [${props}], { shadow: true });
`,
        };
      }
    },
  };
};
