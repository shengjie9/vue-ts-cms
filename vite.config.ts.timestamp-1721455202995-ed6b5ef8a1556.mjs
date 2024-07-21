// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/unplugin-auto-import@0.17.6/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.29/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.29/node_modules/unplugin-vue-components/dist/resolvers.js";
import vueJsx from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createStyleImportPlugin, ElementPlusResolve } from "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/node_modules/.pnpm/vite-plugin-style-import@2.0.0_vite@5.3.1/node_modules/vite-plugin-style-import/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%A7%81%E4%BA%BA%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/vue3-ts-cms/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vueJsx(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjBcXFxcXHU3OUMxXHU0RUJBXHU1QjY2XHU0RTYwXHU5ODc5XHU3NkVFXFxcXHZ1ZTMtdHMtY21zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjBcXFxcXHU3OUMxXHU0RUJBXHU1QjY2XHU0RTYwXHU5ODc5XHU3NkVFXFxcXHZ1ZTMtdHMtY21zXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlODklOEQlRTclQUIlQUYlRTUlQUQlQTYlRTQlQjklQTAvJUU3JUE3JTgxJUU0JUJBJUJBJUU1JUFEJUE2JUU0JUI5JUEwJUU5JUExJUI5JUU3JTlCJUFFL3Z1ZTMtdHMtY21zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy92aXRlOlx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NVx1N0VDNFx1NEVGNlx1NTMwNVxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG4vL3ZpdGVcdUZGMUFcdTYzMDlcdTk3MDBcdTVCRkNcdTUxNjVcdTY4MzdcdTVGMEZcdTUzMDVcbmltcG9ydCB7IGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luLCBFbGVtZW50UGx1c1Jlc29sdmUgfSBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnQnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlSnN4KCksXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgY3JlYXRlU3R5bGVJbXBvcnRQbHVnaW4oe1xuICAgICAgcmVzb2x2ZXM6IFtFbGVtZW50UGx1c1Jlc29sdmUoKV0sXG4gICAgICBsaWJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaWJyYXJ5TmFtZTogJ2VsZW1lbnQtcGx1cycsXG4gICAgICAgICAgZXNNb2R1bGU6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBlbGVtZW50LXBsdXMvdGhlbWUtY2hhbGsvJHtuYW1lfS5jc3NgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1YsU0FBUyxlQUFlLFdBQVc7QUFFM1gsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sWUFBWTtBQUduQixTQUFTLHlCQUF5QiwwQkFBMEI7QUFadUcsSUFBTSwyQ0FBMkM7QUFlcE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0Qsd0JBQXdCO0FBQUEsTUFDdEIsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0FBQUEsTUFDL0IsTUFBTTtBQUFBLFFBQ0o7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLGNBQWMsQ0FBQyxTQUFTO0FBQ3RCLG1CQUFPLDRCQUE0QixJQUFJO0FBQUEsVUFDekM7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
