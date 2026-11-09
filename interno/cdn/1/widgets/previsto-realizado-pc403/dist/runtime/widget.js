System.register(["jimu-core/emotion","jimu-core","widgets/shared-code/pc403"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_widgets_shared_code_pc403__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_widgets_shared_code_pc403__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_widgets_shared_code_pc403__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_widgets_shared_code_pc403__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "widgets/shared-code/pc403"
/*!********************************************!*\
  !*** external "widgets/shared-code/pc403" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_widgets_shared_code_pc403__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/previsto-realizado-pc403/src/runtime/widget.tsx ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var widgets_shared_code_pc403__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/shared-code/pc403 */ "widgets/shared-code/pc403");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const { useState, useEffect, useCallback, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
/** Tabela privada gravada pelo Monitor-Documentos-SABESP (enviar-previsto.js): a página do painel em partes. */
const DADOS_PADRAO = 'https://services6.arcgis.com/QJAp6nG4ishOkuMg/arcgis/rest/services/pc403_previsto_realizado_painel/FeatureServer/0';
let cache = null; // a página (≈1,3 MB) é lida uma vez por sessão do app
/**
 * Previsto × Realizado: exatamente a mesma página publicada antes no GitHub Pages (gerar-gerencial.js, versão
 * pública), agora lida de uma tabela privada do ArcGIS Online com o login do usuário e exibida num iframe isolado.
 */
const Widget = (props) => {
    var _a;
    (0,widgets_shared_code_pc403__WEBPACK_IMPORTED_MODULE_2__.useEstiloBase)();
    const url = (((_a = props.config) === null || _a === void 0 ? void 0 : _a.dadosUrl) || DADOS_PADRAO).replace(/\/+$/, '');
    const sessao = (0,widgets_shared_code_pc403__WEBPACK_IMPORTED_MODULE_2__.useSessao)(url);
    const { logado, tratar } = sessao;
    const [pagina, setPagina] = useState(cache);
    const [carregando, setCarregando] = useState(!cache);
    const [erro, setErro] = useState('');
    const req = useRef(0);
    const carregar = useCallback((...args_1) => __awaiter(void 0, [...args_1], void 0, function* (forcar = false) {
        var _a, _b;
        if (!logado) {
            setCarregando(false);
            return;
        }
        if (cache && !forcar) {
            setPagina(cache);
            setCarregando(false);
            return;
        }
        const id = ++req.current;
        setCarregando(true);
        setErro('');
        try {
            const f = yield (0,widgets_shared_code_pc403__WEBPACK_IMPORTED_MODULE_2__.queryTudo)(`${url}/query`, { where: '1=1', outFields: 'ordem,parte,total_partes,versao,gerado_em', orderByFields: 'ordem', returnGeometry: 'false' }, 1000);
            if (id !== req.current)
                return;
            const linhas = f.map((x) => x.attributes).sort((a, b) => a.ordem - b.ordem);
            const total = (_a = linhas[0]) === null || _a === void 0 ? void 0 : _a.total_partes;
            if (!linhas.length)
                throw new Error('A tabela do painel ainda está vazia. Ela é preenchida pelo monitor às 08h e 14h.');
            if (total && linhas.length !== total)
                throw new Error(`Página incompleta (${linhas.length} de ${total} partes): o monitor pode estar atualizando agora. Tente de novo em instantes.`);
            cache = { html: linhas.map((l) => l.parte || '').join(''), versao: linhas[0].versao || '', geradoEm: (_b = linhas[0].gerado_em) !== null && _b !== void 0 ? _b : null };
            setPagina(cache);
        }
        catch (e) {
            if (id === req.current && !tratar(e))
                setErro((e === null || e === void 0 ? void 0 : e.message) || String(e));
        }
        finally {
            if (id === req.current)
                setCarregando(false);
        }
    }), [url, logado, tratar]);
    useEffect(() => { void carregar(); }, [carregar]);
    const caixa = (conteudo) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'pc4 jimu-widget', style: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f2', padding: 16 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'pc4-card pc4-login', style: { background: '#fff' }, children: conteudo }) }));
    if (!logado) {
        return caixa((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: 'pc4-tit', children: "Entre para ver o Previsto \u00D7 Realizado" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: 'pc4-mudo', children: "O painel fica num servi\u00E7o privado do ArcGIS Online. Entre com a sua conta da organiza\u00E7\u00E3o." }), sessao.msg && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'pc4-aviso', children: sessao.msg }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'pc4-btn pri', onClick: () => { void sessao.login(); }, disabled: sessao.entrando, children: sessao.entrando ? 'Abrindo login…' : 'Entrar com ArcGIS' })] }));
    }
    if (erro && !pagina) {
        return caixa((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: 'pc4-tit', children: "N\u00E3o foi poss\u00EDvel abrir o painel" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: 'pc4-mudo', children: erro }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'pc4-btn pri', onClick: () => { void carregar(true); }, children: "Tentar de novo" })] }));
    }
    if (!pagina) {
        return caixa((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'pc4-sk', style: { width: 260, height: 14 } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: 'pc4-mudo', children: carregando ? 'Carregando o painel Previsto × Realizado…' : 'Sem dados.' })] }));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'jimu-widget', style: { height: '100%', width: '100%', position: 'relative', background: '#fff' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", { title: 'Previsto \u00D7 Realizado', srcDoc: pagina.html, 
                // isolado do app: roda os scripts do painel, mas sem acesso ao login, ao app nem a cookies
                sandbox: 'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-downloads', style: { border: 0, width: '100%', height: '100%', display: 'block' } }, pagina.versao), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'pc4-btn', onClick: () => { void carregar(true); }, disabled: carregando, title: `Página gerada pelo monitor em ${pagina.geradoEm ? `${(0,widgets_shared_code_pc403__WEBPACK_IMPORTED_MODULE_2__.fmtData)(pagina.geradoEm)} ${new Date(pagina.geradoEm).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}` : '—'}. Clique para buscar a versão mais recente.`, style: { position: 'absolute', right: 10, bottom: 10, opacity: 0.85, fontSize: 11, padding: '4px 8px' }, children: carregando ? 'Atualizando…' : '↻ Atualizar' })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcmV2aXN0by1yZWFsaXphZG8tcGM0MDMvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pHO0FBRWtDO0FBRXhGLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyw0Q0FBSztBQUUxRCxnSEFBZ0g7QUFDaEgsTUFBTSxZQUFZLEdBQUcsb0hBQW9IO0FBR3pJLElBQUksS0FBSyxHQUFrQixJQUFJLEVBQUMsc0RBQXNEO0FBRXRGOzs7R0FHRztBQUNILE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFOztJQUNqRCx3RUFBYSxFQUFFO0lBQ2YsTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFLLENBQUMsTUFBTSwwQ0FBRSxRQUFRLEtBQUksWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFDeEUsTUFBTSxN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LE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDaEYsS0FBSyxFQUFFLGlDQUFpQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtFQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsNkNBQTZDLEVBQzNPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQ3RHLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQ3JDLElBQ0wsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcIndpZGdldHMvc2hhcmVkLWNvZGUvcGM0MDNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ByZXZpc3RvLXJlYWxpemFkby1wYzQwMy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2lkZ2V0c19zaGFyZWRfY29kZV9wYzQwM19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgdXNlRXN0aWxvQmFzZSwgdXNlU2Vzc2FvLCBxdWVyeVR1ZG8sIGZtdERhdGEgfSBmcm9tICd3aWRnZXRzL3NoYXJlZC1jb2RlL3BjNDAzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSA9IFJlYWN0XG5cbi8qKiBUYWJlbGEgcHJpdmFkYSBncmF2YWRhIHBlbG8gTW9uaXRvci1Eb2N1bWVudG9zLVNBQkVTUCAoZW52aWFyLXByZXZpc3RvLmpzKTogYSBww6FnaW5hIGRvIHBhaW5lbCBlbSBwYXJ0ZXMuICovXG5jb25zdCBEQURPU19QQURSQU8gPSAnaHR0cHM6Ly9zZXJ2aWNlczYuYXJjZ2lzLmNvbS9RSkFwNm5HNGlzaE9rdU1nL2FyY2dpcy9yZXN0L3NlcnZpY2VzL3BjNDAzX3ByZXZpc3RvX3JlYWxpemFkb19wYWluZWwvRmVhdHVyZVNlcnZlci8wJ1xuXG5pbnRlcmZhY2UgUGFnaW5hIHsgaHRtbDogc3RyaW5nLCB2ZXJzYW86IHN0cmluZywgZ2VyYWRvRW06IG51bWJlciB8IG51bGwgfVxubGV0IGNhY2hlOiBQYWdpbmEgfCBudWxsID0gbnVsbCAvLyBhIHDDoWdpbmEgKOKJiDEsMyBNQikgw6kgbGlkYSB1bWEgdmV6IHBvciBzZXNzw6NvIGRvIGFwcFxuXG4vKipcbiAqIFByZXZpc3RvIMOXIFJlYWxpemFkbzogZXhhdGFtZW50ZSBhIG1lc21hIHDDoWdpbmEgcHVibGljYWRhIGFudGVzIG5vIEdpdEh1YiBQYWdlcyAoZ2VyYXItZ2VyZW5jaWFsLmpzLCB2ZXJzw6NvXG4gKiBww7pibGljYSksIGFnb3JhIGxpZGEgZGUgdW1hIHRhYmVsYSBwcml2YWRhIGRvIEFyY0dJUyBPbmxpbmUgY29tIG8gbG9naW4gZG8gdXN1w6FyaW8gZSBleGliaWRhIG51bSBpZnJhbWUgaXNvbGFkby5cbiAqL1xuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgdXNlRXN0aWxvQmFzZSgpXG4gIGNvbnN0IHVybCA9IChwcm9wcy5jb25maWc/LmRhZG9zVXJsIHx8IERBRE9TX1BBRFJBTykucmVwbGFjZSgvXFwvKyQvLCAnJylcbiAgY29uc3Qgc2Vzc2FvID0gdXNlU2Vzc2FvKHVybClcbiAgY29uc3QgeyBsb2dhZG8sIHRyYXRhciB9ID0gc2Vzc2FvXG4gIGNvbnN0IFtwYWdpbmEsIHNldFBhZ2luYV0gPSB1c2VTdGF0ZTxQYWdpbmEgfCBudWxsPihjYWNoZSlcbiAgY29uc3QgW2NhcnJlZ2FuZG8sIHNldENhcnJlZ2FuZG9dID0gdXNlU3RhdGUoIWNhY2hlKVxuICBjb25zdCBbZXJybywgc2V0RXJyb10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgcmVxID0gdXNlUmVmKDApXG5cbiAgY29uc3QgY2FycmVnYXIgPSB1c2VDYWxsYmFjayhhc3luYyAoZm9yY2FyID0gZmFsc2UpID0+IHtcbiAgICBpZiAoIWxvZ2FkbykgeyBzZXRDYXJyZWdhbmRvKGZhbHNlKTsgcmV0dXJuIH1cbiAgICBpZiAoY2FjaGUgJiYgIWZvcmNhcikgeyBzZXRQYWdpbmEoY2FjaGUpOyBzZXRDYXJyZWdhbmRvKGZhbHNlKTsgcmV0dXJuIH1cbiAgICBjb25zdCBpZCA9ICsrcmVxLmN1cnJlbnRcbiAgICBzZXRDYXJyZWdhbmRvKHRydWUpOyBzZXRFcnJvKCcnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmID0gYXdhaXQgcXVlcnlUdWRvKGAke3VybH0vcXVlcnlgLCB7IHdoZXJlOiAnMT0xJywgb3V0RmllbGRzOiAnb3JkZW0scGFydGUsdG90YWxfcGFydGVzLHZlcnNhbyxnZXJhZG9fZW0nLCBvcmRlckJ5RmllbGRzOiAnb3JkZW0nLCByZXR1cm5HZW9tZXRyeTogJ2ZhbHNlJyB9LCAxMDAwKVxuICAgICAgaWYgKGlkICE9PSByZXEuY3VycmVudCkgcmV0dXJuXG4gICAgICBjb25zdCBsaW5oYXMgPSBmLm1hcCgoeDogYW55KSA9PiB4LmF0dHJpYnV0ZXMpLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhLm9yZGVtIC0gYi5vcmRlbSlcbiAgICAgIGNvbnN0IHRvdGFsID0gbGluaGFzWzBdPy50b3RhbF9wYXJ0ZXNcbiAgICAgIGlmICghbGluaGFzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdBIHRhYmVsYSBkbyBwYWluZWwgYWluZGEgZXN0w6EgdmF6aWEuIEVsYSDDqSBwcmVlbmNoaWRhIHBlbG8gbW9uaXRvciDDoHMgMDhoIGUgMTRoLicpXG4gICAgICBpZiAodG90YWwgJiYgbGluaGFzLmxlbmd0aCAhPT0gdG90YWwpIHRocm93IG5ldyBFcnJvcihgUMOhZ2luYSBpbmNvbXBsZXRhICgke2xpbmhhcy5sZW5ndGh9IGRlICR7dG90YWx9IHBhcnRlcyk6IG8gbW9uaXRvciBwb2RlIGVzdGFyIGF0dWFsaXphbmRvIGFnb3JhLiBUZW50ZSBkZSBub3ZvIGVtIGluc3RhbnRlcy5gKVxuICAgICAgY2FjaGUgPSB7IGh0bWw6IGxpbmhhcy5tYXAoKGw6IGFueSkgPT4gbC5wYXJ0ZSB8fCAnJykuam9pbignJyksIHZlcnNhbzogbGluaGFzWzBdLnZlcnNhbyB8fCAnJywgZ2VyYWRvRW06IGxpbmhhc1swXS5nZXJhZG9fZW0gPz8gbnVsbCB9XG4gICAgICBzZXRQYWdpbmEoY2FjaGUpXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoaWQgPT09IHJlcS5jdXJyZW50ICYmICF0cmF0YXIoZSkpIHNldEVycm8oZT8ubWVzc2FnZSB8fCBTdHJpbmcoZSkpXG4gICAgfSBmaW5hbGx5IHsgaWYgKGlkID09PSByZXEuY3VycmVudCkgc2V0Q2FycmVnYW5kbyhmYWxzZSkgfVxuICB9LCBbdXJsLCBsb2dhZG8sIHRyYXRhcl0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7IHZvaWQgY2FycmVnYXIoKSB9LCBbY2FycmVnYXJdKVxuXG4gIGNvbnN0IGNhaXhhID0gKGNvbnRldWRvOiBSZWFjdC5SZWFjdE5vZGUpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGM0IGppbXUtd2lkZ2V0JyBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBiYWNrZ3JvdW5kOiAnI2Y0ZjdmMicsIHBhZGRpbmc6IDE2IH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BjNC1jYXJkIHBjNC1sb2dpbicgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnIH19Pntjb250ZXVkb308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGlmICghbG9nYWRvKSB7XG4gICAgcmV0dXJuIGNhaXhhKDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdwYzQtdGl0Jz5FbnRyZSBwYXJhIHZlciBvIFByZXZpc3RvIMOXIFJlYWxpemFkbzwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9J3BjNC1tdWRvJz5PIHBhaW5lbCBmaWNhIG51bSBzZXJ2acOnbyBwcml2YWRvIGRvIEFyY0dJUyBPbmxpbmUuIEVudHJlIGNvbSBhIHN1YSBjb250YSBkYSBvcmdhbml6YcOnw6NvLjwvcD5cbiAgICAgIHtzZXNzYW8ubXNnICYmIDxkaXYgY2xhc3NOYW1lPSdwYzQtYXZpc28nPntzZXNzYW8ubXNnfTwvZGl2Pn1cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwYzQtYnRuIHByaScgb25DbGljaz17KCkgPT4geyB2b2lkIHNlc3Nhby5sb2dpbigpIH19IGRpc2FibGVkPXtzZXNzYW8uZW50cmFuZG99PntzZXNzYW8uZW50cmFuZG8gPyAnQWJyaW5kbyBsb2dpbuKApicgOiAnRW50cmFyIGNvbSBBcmNHSVMnfTwvYnV0dG9uPlxuICAgIDwvPilcbiAgfVxuICBpZiAoZXJybyAmJiAhcGFnaW5hKSB7XG4gICAgcmV0dXJuIGNhaXhhKDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdwYzQtdGl0Jz5Ow6NvIGZvaSBwb3Nzw612ZWwgYWJyaXIgbyBwYWluZWw8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPSdwYzQtbXVkbyc+e2Vycm99PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BjNC1idG4gcHJpJyBvbkNsaWNrPXsoKSA9PiB7IHZvaWQgY2FycmVnYXIodHJ1ZSkgfX0+VGVudGFyIGRlIG5vdm88L2J1dHRvbj5cbiAgICA8Lz4pXG4gIH1cbiAgaWYgKCFwYWdpbmEpIHtcbiAgICByZXR1cm4gY2FpeGEoPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYzQtc2snIHN0eWxlPXt7IHdpZHRoOiAyNjAsIGhlaWdodDogMTQgfX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT0ncGM0LW11ZG8nPntjYXJyZWdhbmRvID8gJ0NhcnJlZ2FuZG8gbyBwYWluZWwgUHJldmlzdG8gw5cgUmVhbGl6YWRv4oCmJyA6ICdTZW0gZGFkb3MuJ308L3A+XG4gICAgPC8+KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0JyBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJhY2tncm91bmQ6ICcjZmZmJyB9fT5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAga2V5PXtwYWdpbmEudmVyc2FvfVxuICAgICAgICB0aXRsZT0nUHJldmlzdG8gw5cgUmVhbGl6YWRvJ1xuICAgICAgICBzcmNEb2M9e3BhZ2luYS5odG1sfVxuICAgICAgICAvLyBpc29sYWRvIGRvIGFwcDogcm9kYSBvcyBzY3JpcHRzIGRvIHBhaW5lbCwgbWFzIHNlbSBhY2Vzc28gYW8gbG9naW4sIGFvIGFwcCBuZW0gYSBjb29raWVzXG4gICAgICAgIHNhbmRib3g9J2FsbG93LXNjcmlwdHMgYWxsb3ctcG9wdXBzIGFsbG93LXBvcHVwcy10by1lc2NhcGUtc2FuZGJveCBhbGxvdy1kb3dubG9hZHMnXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0ncGM0LWJ0bicgb25DbGljaz17KCkgPT4geyB2b2lkIGNhcnJlZ2FyKHRydWUpIH19IGRpc2FibGVkPXtjYXJyZWdhbmRvfVxuICAgICAgICB0aXRsZT17YFDDoWdpbmEgZ2VyYWRhIHBlbG8gbW9uaXRvciBlbSAke3BhZ2luYS5nZXJhZG9FbSA/IGAke2ZtdERhdGEocGFnaW5hLmdlcmFkb0VtKX0gJHtuZXcgRGF0ZShwYWdpbmEuZ2VyYWRvRW0pLnRvTG9jYWxlVGltZVN0cmluZygncHQtQlInLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSl9YCA6ICfigJQnfS4gQ2xpcXVlIHBhcmEgYnVzY2FyIGEgdmVyc8OjbyBtYWlzIHJlY2VudGUuYH1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMCwgYm90dG9tOiAxMCwgb3BhY2l0eTogMC44NSwgZm9udFNpemU6IDExLCBwYWRkaW5nOiAnNHB4IDhweCcgfX0+XG4gICAgICAgIHtjYXJyZWdhbmRvID8gJ0F0dWFsaXphbmRv4oCmJyA6ICfihrsgQXR1YWxpemFyJ31cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==