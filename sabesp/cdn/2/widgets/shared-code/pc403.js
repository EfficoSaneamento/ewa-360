System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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
/*!******************************************************!*\
  !*** ./your-extensions/widgets/shared-code/pc403.ts ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATIVIDADES: () => (/* binding */ ATIVIDADES),
/* harmony export */   COR: () => (/* binding */ COR),
/* harmony export */   CSS_BASE: () => (/* binding */ CSS_BASE),
/* harmony export */   ETAPAS: () => (/* binding */ ETAPAS),
/* harmony export */   ErroServico: () => (/* binding */ ErroServico),
/* harmony export */   ErroSessao: () => (/* binding */ ErroSessao),
/* harmony export */   FASES_GOV: () => (/* binding */ FASES_GOV),
/* harmony export */   ROTULO_STATUS: () => (/* binding */ ROTULO_STATUS),
/* harmony export */   SERVICO_PADRAO: () => (/* binding */ SERVICO_PADRAO),
/* harmony export */   TERRITORIO_VAZIO: () => (/* binding */ TERRITORIO_VAZIO),
/* harmony export */   entrar: () => (/* binding */ entrar),
/* harmony export */   fmtData: () => (/* binding */ fmtData),
/* harmony export */   fmtH: () => (/* binding */ fmtH),
/* harmony export */   fmtNum: () => (/* binding */ fmtNum),
/* harmony export */   fmtPct: () => (/* binding */ fmtPct),
/* harmony export */   getTerritorio: () => (/* binding */ getTerritorio),
/* harmony export */   idSetor: () => (/* binding */ idSetor),
/* harmony export */   irParaPagina: () => (/* binding */ irParaPagina),
/* harmony export */   limparTerritorio: () => (/* binding */ limparTerritorio),
/* harmony export */   noRecorte: () => (/* binding */ noRecorte),
/* harmony export */   normKey: () => (/* binding */ normKey),
/* harmony export */   paginaExiste: () => (/* binding */ paginaExiste),
/* harmony export */   pctConforme: () => (/* binding */ pctConforme),
/* harmony export */   pctGovernanca: () => (/* binding */ pctGovernanca),
/* harmony export */   queryPorData: () => (/* binding */ queryPorData),
/* harmony export */   queryTudo: () => (/* binding */ queryTudo),
/* harmony export */   rest: () => (/* binding */ rest),
/* harmony export */   selecionarSetor: () => (/* binding */ selecionarSetor),
/* harmony export */   setTerritorio: () => (/* binding */ setTerritorio),
/* harmony export */   setorUnico: () => (/* binding */ setorUnico),
/* harmony export */   sqlDate: () => (/* binding */ sqlDate),
/* harmony export */   sqlStr: () => (/* binding */ sqlStr),
/* harmony export */   sqlTs: () => (/* binding */ sqlTs),
/* harmony export */   temRecorte: () => (/* binding */ temRecorte),
/* harmony export */   temSessao: () => (/* binding */ temSessao),
/* harmony export */   useEstiloBase: () => (/* binding */ useEstiloBase),
/* harmony export */   useSessao: () => (/* binding */ useSessao),
/* harmony export */   useTerritorio: () => (/* binding */ useTerritorio),
/* harmony export */   usuarioAtual: () => (/* binding */ usuarioAtual)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Código compartilhado dos widgets do app PC 403 (EWA 360, Timesheet, Previsto × Realizado, Produtividade).
// Por ser um módulo de "shared-code", existe uma única instância em tempo de execução: o filtro territorial
// definido em uma página vale para todas as outras.

const SERVICO_PADRAO = 'https://services6.arcgis.com/QJAp6nG4ishOkuMg/arcgis/rest/services/service_ade14533db8d4d12a586ee30e94a0dc8/FeatureServer';
// ======================================================================
// Sessão e REST
// ======================================================================
/** Erro de autenticação: sem sessão, token expirado ou sem permissão no item. */
class ErroSessao extends Error {
    constructor(msg = 'É preciso entrar com a conta ArcGIS para acessar os dados.') {
        super(msg);
        this.name = 'ErroSessao';
    }
}
class ErroServico extends Error {
    constructor(msg, code) {
        super(msg);
        this.name = 'ErroServico';
        this.code = code;
    }
}
function sessaoPara(url) {
    try {
        const sm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        return sm.getSessionByUrl(url) || sm.getMainSession() || null;
    }
    catch (e) {
        return null;
    }
}
const temSessao = (url) => !!sessaoPara(url);
function entrar() {
    return __awaiter(this, arguments, void 0, function* (forcar = false) {
        yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().signIn({ popup: true, forceLogin: forcar });
    });
}
function usuarioAtual() {
    try {
        const s = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return (s === null || s === void 0 ? void 0 : s.username) || '';
    }
    catch (e) {
        return '';
    }
}
const CODIGOS_SESSAO = [401, 403, 498, 499];
function rest(url, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const s = sessaoPara(url);
        let tk;
        try {
            tk = s ? yield s.getToken(url) : null;
        }
        catch (e) {
            tk = null;
        }
        if (!tk)
            throw new ErroSessao();
        const body = new URLSearchParams();
        Object.keys(params).forEach(k => {
            const v = params[k];
            body.append(k, typeof v === 'string' ? v : JSON.stringify(v));
        });
        body.append('f', 'json');
        body.append('token', tk);
        let r;
        try {
            r = yield fetch(url, { method: 'POST', body });
        }
        catch (e) {
            throw new Error('Sem conexão com o serviço. Verifique a internet e tente de novo.');
        }
        if (CODIGOS_SESSAO.includes(r.status))
            throw new ErroSessao('Sua sessão expirou ou não tem acesso a este serviço.');
        let j;
        try {
            j = yield r.json();
        }
        catch (e) {
            throw new Error(`Resposta inválida do serviço (HTTP ${r.status})`);
        }
        if (j === null || j === void 0 ? void 0 : j.error) {
            const cod = Number(j.error.code);
            if (CODIGOS_SESSAO.includes(cod))
                throw new ErroSessao(cod === 403 ? 'Sua conta não tem permissão neste serviço.' : 'Sua sessão expirou. Entre novamente.');
            const det = Array.isArray(j.error.details) && j.error.details.length ? ` (${j.error.details.join('; ')})` : '';
            throw new ErroServico((j.error.message || 'Erro no serviço') + det, cod);
        }
        return j;
    });
}
/** Busca todas as páginas de uma query (respeita o maxRecordCount do serviço). */
function queryTudo(url_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, params, pagina = 1000) {
        const out = [];
        for (let offset = 0; offset < 50000; offset += pagina) {
            const j = yield rest(url, Object.assign(Object.assign({}, params), { resultOffset: String(offset), resultRecordCount: String(pagina) }));
            const f = j.features || [];
            out.push(...f);
            if (!j.exceededTransferLimit || !f.length)
                break;
        }
        return out;
    });
}
const p2 = (n) => String(n).padStart(2, '0');
/** 'YYYY-MM-DD HH:MM:SS' em UTC, para TIMESTAMP '...' (SQL padronizado do ArcGIS Online) */
const sqlTs = (d) => `${d.getUTCFullYear()}-${p2(d.getUTCMonth() + 1)}-${p2(d.getUTCDate())} ${p2(d.getUTCHours())}:${p2(d.getUTCMinutes())}:${p2(d.getUTCSeconds())}`;
const sqlDate = (d) => `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
/** Intervalo de datas [ini, fim) no campo informado; usa DATE '...' se o serviço recusar TIMESTAMP. */
function queryPorData(url_1, intervalo_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, intervalo, params, pagina = 1000) {
        const { campo, ini, fim, extra } = intervalo;
        try {
            return yield queryTudo(url, Object.assign(Object.assign({}, params), { where: `${campo} >= TIMESTAMP '${sqlTs(ini)}' AND ${campo} < TIMESTAMP '${sqlTs(fim)}'${extra ? ` AND ${extra}` : ''}` }), pagina);
        }
        catch (e) {
            if (!(e instanceof ErroServico) || e.code !== 400)
                throw e;
            return yield queryTudo(url, Object.assign(Object.assign({}, params), { where: `${campo} >= DATE '${sqlDate(ini)}' AND ${campo} < DATE '${sqlDate(fim)}'${extra ? ` AND ${extra}` : ''}` }), pagina);
        }
    });
}
/** Escapa um valor de texto para SQL. */
const sqlStr = (s) => `'${String(s).replace(/'/g, "''")}'`;
/** Hook de sessão: logado, mensagem, função de login e "tratar" para erros de sessão. */
function useSessao(url) {
    const [logado, setLogado] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => !url || temSessao(url));
    const [msg, setMsg] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [entrando, setEntrando] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (logado || !url || msg)
            return;
        const t = window.setInterval(() => { if (temSessao(url))
            setLogado(true); }, 1500);
        return () => { window.clearInterval(t); };
    }, [logado, url, msg]);
    const tratar = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((e) => {
        if (e instanceof ErroSessao) {
            setLogado(false);
            setMsg(e.message);
            return true;
        }
        return false;
    }, []);
    const login = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        setEntrando(true);
        try {
            yield entrar(temSessao(url));
            setMsg('');
            setLogado(true);
        }
        catch (e) {
            setMsg((e === null || e === void 0 ? void 0 : e.message) ? `Não foi possível entrar: ${e.message}` : 'Login cancelado.');
        }
        finally {
            setEntrando(false);
        }
    }), [url]);
    return { logado, msg, entrando, tratar, login };
}
const TERRITORIO_VAZIO = { dirs: [], municipios: [], setores: [] };
const CHAVE = 'pc403-territorio';
const EVENTO = 'pc403-territorio';
function lerTerritorio() {
    try {
        const t = JSON.parse(window.sessionStorage.getItem(CHAVE) || '{}');
        return {
            dirs: Array.isArray(t.dirs) ? t.dirs : [],
            municipios: Array.isArray(t.municipios) ? t.municipios : [],
            setores: Array.isArray(t.setores) ? t.setores : []
        };
    }
    catch (e) {
        return TERRITORIO_VAZIO;
    }
}
let territorioAtual = lerTerritorio();
const getTerritorio = () => territorioAtual;
function setTerritorio(t) {
    const novo = typeof t === 'function' ? t(territorioAtual) : t;
    if (JSON.stringify(novo) === JSON.stringify(territorioAtual))
        return;
    territorioAtual = novo;
    try {
        window.sessionStorage.setItem(CHAVE, JSON.stringify(novo));
    }
    catch (e) { /* sem storage */ }
    window.dispatchEvent(new CustomEvent(EVENTO, { detail: novo }));
}
const selecionarSetor = (idSetor, dir = '', municipio = '') => { setTerritorio({ dirs: dir ? [dir] : [], municipios: municipio ? [municipio] : [], setores: idSetor ? [idSetor] : [] }); };
const limparTerritorio = () => { setTerritorio(TERRITORIO_VAZIO); };
function useTerritorio() {
    const [t, setT] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(territorioAtual);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const f = (e) => { setT(e.detail); };
        window.addEventListener(EVENTO, f);
        setT(territorioAtual);
        return () => { window.removeEventListener(EVENTO, f); };
    }, []);
    return t;
}
const temRecorte = (t) => t.dirs.length + t.municipios.length + t.setores.length > 0;
const setorUnico = (t) => (t.setores.length === 1 ? t.setores[0] : null);
/** "100_031" a partir de id_setor ou de codigo_municipio + codigo_setor. */
function idSetor(a) {
    if (a.id_setor && /^\d{3}_\d{3}$/.test(String(a.id_setor)))
        return String(a.id_setor);
    const m = Number(a.codigo_municipio);
    const s = Number(a.codigo_setor);
    return Number.isInteger(m) && Number.isInteger(s) ? `${String(m).padStart(3, '0')}_${String(s).padStart(3, '0')}` : '';
}
/** Linhas da camada de setores que passam no recorte. */
function noRecorte(rows, t) {
    return rows.filter(r => (!t.dirs.length || t.dirs.includes(String(r.dir_operacional || ''))) &&
        (!t.municipios.length || t.municipios.includes(String(r.municipio || ''))) &&
        (!t.setores.length || t.setores.includes(idSetor(r))));
}
// ======================================================================
// Navegação entre páginas (pelo rótulo, sem depender de ids do config)
// ======================================================================
const normKey = (s) => String(s !== null && s !== void 0 ? s : '').normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();
/** O app atual tem uma página com esse rótulo? (o mesmo widget serve ao app interno e ao app da Sabesp) */
function paginaExiste(rotulo) {
    var _a;
    try {
        const pages = ((_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _a === void 0 ? void 0 : _a.pages) || {};
        const alvo = normKey(rotulo);
        return Object.values(pages).some((x) => x.isVisible !== false && normKey(x.label).includes(alvo));
    }
    catch (e) {
        return false;
    }
}
function irParaPagina(rotulo) {
    var _a;
    try {
        const pages = ((_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _a === void 0 ? void 0 : _a.pages) || {};
        const alvo = normKey(rotulo);
        const p = Object.values(pages).find((x) => normKey(x.label) === alvo) ||
            Object.values(pages).find((x) => normKey(x.label).includes(alvo));
        if (!p)
            return false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changePage(p.id);
        return true;
    }
    catch (e) {
        return false;
    }
}
// ======================================================================
// Domínio
// ======================================================================
const ETAPAS = [
    { k: '01_TOPOLOGIA', p: 'top', gov: 'topologia', nome: 'Topologia', sigla: 'Top', cor: '#3b6e8f' },
    { k: '02_CALIBRACAO', p: 'cal', gov: 'calibracao', nome: 'Calibração', sigla: 'Cal', cor: '#687b58' },
    { k: '03_CONCEPCAO', p: 'con', gov: 'concepcao', nome: 'Concepção', sigla: 'Con', cor: '#c08a2e' },
    { k: '04_PACOTE_TECNICO', p: 'pt', gov: 'pacote_tecnico', nome: 'Pacote Técnico', sigla: 'PT', cor: '#8a5a83' }
];
/** "atividade" não tem domínio no serviço: rótulos do XLSForm (lista atividades_modelagem). */
const ATIVIDADES = [
    { code: 'topo_construcao_modelos', name: 'Construção de modelos', etapa: 'topologia' },
    { code: 'topo_reuniao_tecnica', name: 'Reunião técnica', etapa: 'topologia' },
    { code: 'topo_ajuste_final', name: 'Ajuste final', etapa: 'topologia' },
    { code: 'topo_definir_pontos', name: 'Definir pontos', etapa: 'topologia' },
    { code: 'cal_carregamento_dados', name: 'Carregamento dos dados de campo', etapa: 'calibracao' },
    { code: 'cal_adequacoes_simulacao', name: 'Adequações na simulação', etapa: 'calibracao' },
    { code: 'cal_reuniao_polo', name: 'Reunião de apresentação para o polo', etapa: 'calibracao' },
    { code: 'cal_relatorio', name: 'Elaboração de relatório', etapa: 'calibracao' },
    { code: 'conc_cenarios', name: 'Construção e configuração dos cenários', etapa: 'concepcao' },
    { code: 'conc_propostas', name: 'Elaboração das propostas', etapa: 'concepcao' },
    { code: 'conc_reuniao_polo', name: 'Reunião de apresentação para o polo', etapa: 'concepcao' },
    { code: 'conc_relatorio', name: 'Elaboração do relatório', etapa: 'concepcao' }
];
/** Itens da governança (Survey) por fase, como no EWA 360. */
const FASES_GOV = [
    { nome: 'Topologia', campos: ['cadastro_rede_status', 'micromedicao_status', 'reservatorio_status', 'vrp_status', 'boo_status', 'altimetria_status', 'construcao_modelo_hd'] },
    { nome: 'Calibração', campos: ['pontos_calibracao_status', 'campanha_mvp_status', 'limtes_status', 'modelo_espanet_status', 'modelo_watergems_status'] },
    { nome: 'Concepções', campos: ['cenarios_status', 'relatorio_word_status', 'relatorio_pdf_status'] },
    { nome: 'Pacote técnico', campos: ['memoriais_status', 'desenhos_status', 'documentacao_tecnica_status', 'espec_tec_status', 'planilha_quant_status', 'regula_preco_status', 'plan_orca_status', 'cro_fisi_fina_status'] }
];
/** % conforme (conforme = 100%, demais = 0%, "não aplicável" fora da conta). */
function pctConforme(row, campos) {
    const validos = campos.filter(c => normKey(row[c]) !== 'nao_aplicavel');
    return validos.length ? validos.filter(c => normKey(row[c]) === 'conforme').length / validos.length * 100 : null;
}
function pctGovernanca(row) {
    const v = FASES_GOV.map(f => pctConforme(row, f.campos)).filter(x => x !== null);
    return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
}
const ROTULO_STATUS = {
    conforme: 'Conforme', incompleto: 'Incompleto', nao_recebido: 'Não recebido', pendente: 'Pendente', nao_aplicavel: 'Não se aplica'
};
// ======================================================================
// Formatação
// ======================================================================
const fmtNum = (v, casas = 0) => (Number.isFinite(v) ? v.toLocaleString('pt-BR', { maximumFractionDigits: casas, minimumFractionDigits: 0 }) : '—');
const fmtH = (h) => fmtNum(Math.round(h * 100) / 100, 2);
const fmtPct = (v, casas = 1) => (v == null || !Number.isFinite(v) ? '—' : `${v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}%`);
const fmtData = (ms) => {
    if (ms == null || ms === '')
        return '—';
    const d = typeof ms === 'number' ? new Date(ms) : new Date(`${ms}T12:00:00`);
    return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('pt-BR');
};
// ======================================================================
// Visual EWA (cores e classes base, prefixo .pc4)
// ======================================================================
const COR = {
    verde: '#687B58', verdeEsc: '#4f5f42', azul: '#1F3B4D', azulMed: '#2c4a5e', palido: '#F4F7F2', linha: '#D7E1D4',
    texto: '#31434B', mudo: '#60727a', destaque: '#1983ad', ok: '#247c4b', okFundo: '#e1f2e8', alerta: '#ad6b12',
    alertaFundo: '#fff0d9', neutro: '#667781', neutroFundo: '#edf1f2', erro: '#b23b3b', erroFundo: '#fbeaea'
};
const CSS_BASE = `
.pc4{--verde:${COR.verde};--verde-esc:${COR.verdeEsc};--azul:${COR.azul};--azul-med:${COR.azulMed};--palido:${COR.palido};--linha:${COR.linha};
  --texto:${COR.texto};--mudo:${COR.mudo};--destaque:${COR.destaque};--ok:${COR.ok};--ok-f:${COR.okFundo};--alerta:${COR.alerta};--alerta-f:${COR.alertaFundo};
  --neutro:${COR.neutro};--neutro-f:${COR.neutroFundo};--erro:${COR.erro};--erro-f:${COR.erroFundo};
  font-family:"Segoe UI",Arial,sans-serif;font-size:13px;color:var(--texto);box-sizing:border-box}
.pc4 *{box-sizing:border-box}
.pc4 button{font:inherit;cursor:pointer}
.pc4 button:disabled{cursor:default;opacity:.5}
.pc4 svg{flex-shrink:0}
.pc4-card{border:1px solid var(--linha);border-radius:8px;background:#fff;overflow:hidden;margin-bottom:10px;min-width:0}
.pc4-card-h{background:var(--verde);color:#fff;padding:9px 12px;font-weight:700;font-size:12px;letter-spacing:.04em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.pc4-card-h .rt{margin-left:auto;display:flex;gap:4px;align-items:center;text-transform:none;letter-spacing:0;font-weight:600}
.pc4-card-h button.ic{color:#fff;border:1px solid rgba(255,255,255,.8);background:transparent;border-radius:3px;min-width:22px;height:20px;padding:0 4px;line-height:1}
.pc4-card-b{padding:11px 13px}
.pc4-mudo{color:var(--mudo);font-size:12px;line-height:1.5}
.pc4-pequeno{font-size:11px}
.pc4-tit{color:var(--azul);font-weight:700}
.pc4-btn{border:1px solid var(--linha);background:#fff;color:var(--azul);border-radius:6px;padding:6px 10px;font-weight:600;font-size:12px;display:inline-flex;align-items:center;gap:6px}
.pc4-btn:hover{background:var(--palido)}
.pc4-btn.pri{background:var(--verde);border-color:var(--verde);color:#fff}
.pc4-btn.pri:hover{background:var(--verde-esc)}
.pc4-btn.esc{background:var(--azul);border-color:var(--azul);color:#fff}
.pc4-seg{display:flex;gap:4px}
.pc4-seg button{flex:1;border:1px solid var(--linha);border-radius:4px;padding:5px 4px;background:#fff;color:var(--azul);font-size:11px}
.pc4-seg button.on{background:var(--azul);border-color:var(--azul);color:#fff}
.pc4-bar{height:9px;background:#e9eee7;border-radius:5px;overflow:hidden}
.pc4-bar > i{display:block;height:100%;background:var(--verde);border-radius:5px}
.pc4-st{display:inline-flex;align-items:center;gap:4px;border-radius:4px;padding:2px 6px;font-weight:700;font-size:11px;white-space:nowrap}
.pc4-st.conforme{background:var(--ok-f);color:var(--ok)}
.pc4-st.incompleto{background:var(--alerta-f);color:var(--alerta)}
.pc4-st.outro{background:var(--neutro-f);color:var(--neutro)}
.pc4-lin{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--linha)}
.pc4-lin:last-child{border-bottom:0}
.pc4-tile{background:var(--palido);border-radius:6px;padding:5px 7px;min-width:0;display:flex;align-items:center;gap:6px}
.pc4-tile .l{color:var(--mudo);font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pc4-tile .v{color:var(--azul);font-weight:700;font-size:12px;overflow-wrap:anywhere}
.pc4-erro{color:var(--erro);font-size:11px}
.pc4-aviso{background:var(--alerta-f);color:var(--alerta);border-radius:6px;padding:6px 9px;font-size:11px;font-weight:600}
.pc4-login{max-width:460px;margin:24px auto;text-align:center;padding:22px;display:flex;flex-direction:column;align-items:center;gap:8px}
.pc4-sk{background:linear-gradient(90deg,#eef1ea 25%,#f7f8f5 50%,#eef1ea 75%);background-size:200% 100%;animation:pc4sk 1.2s infinite;border-radius:6px}
@keyframes pc4sk{from{background-position:200% 0}to{background-position:-200% 0}}
`;
/** Injeta o CSS base uma única vez no documento. */
function useEstiloBase() {
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (document.getElementById('pc4-estilo-base'))
            return;
        const s = document.createElement('style');
        s.id = 'pc4-estilo-base';
        s.textContent = CSS_BASE;
        document.head.appendChild(s);
    }, []);
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxRQUFRO1FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaGFyZWQtY29kZS9wYzQwMy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvLyBDw7NkaWdvIGNvbXBhcnRpbGhhZG8gZG9zIHdpZGdldHMgZG8gYXBwIFBDIDQwMyAoRVdBIDM2MCwgVGltZXNoZWV0LCBQcmV2aXN0byDDlyBSZWFsaXphZG8sIFByb2R1dGl2aWRhZGUpLlxuLy8gUG9yIHNlciB1bSBtw7NkdWxvIGRlIFwic2hhcmVkLWNvZGVcIiwgZXhpc3RlIHVtYSDDum5pY2EgaW5zdMOibmNpYSBlbSB0ZW1wbyBkZSBleGVjdcOnw6NvOiBvIGZpbHRybyB0ZXJyaXRvcmlhbFxuLy8gZGVmaW5pZG8gZW0gdW1hIHDDoWdpbmEgdmFsZSBwYXJhIHRvZGFzIGFzIG91dHJhcy5cbmltcG9ydCB7IFJlYWN0LCBTZXNzaW9uTWFuYWdlciwgamltdUhpc3RvcnksIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3QgU0VSVklDT19QQURSQU8gPSAnaHR0cHM6Ly9zZXJ2aWNlczYuYXJjZ2lzLmNvbS9RSkFwNm5HNGlzaE9rdU1nL2FyY2dpcy9yZXN0L3NlcnZpY2VzL3NlcnZpY2VfYWRlMTQ1MzNkYjhkNGQxMmE1ODZlZTMwZTk0YTBkYzgvRmVhdHVyZVNlcnZlcidcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Vzc8OjbyBlIFJFU1Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKiBFcnJvIGRlIGF1dGVudGljYcOnw6NvOiBzZW0gc2Vzc8OjbywgdG9rZW4gZXhwaXJhZG8gb3Ugc2VtIHBlcm1pc3PDo28gbm8gaXRlbS4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvU2Vzc2FvIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobXNnID0gJ8OJIHByZWNpc28gZW50cmFyIGNvbSBhIGNvbnRhIEFyY0dJUyBwYXJhIGFjZXNzYXIgb3MgZGFkb3MuJykge1xuICAgIHN1cGVyKG1zZylcbiAgICB0aGlzLm5hbWUgPSAnRXJyb1Nlc3NhbydcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXJyb1NlcnZpY28gZXh0ZW5kcyBFcnJvciB7XG4gIGNvZGU6IG51bWJlclxuICBjb25zdHJ1Y3RvciAobXNnOiBzdHJpbmcsIGNvZGU6IG51bWJlcikge1xuICAgIHN1cGVyKG1zZylcbiAgICB0aGlzLm5hbWUgPSAnRXJyb1NlcnZpY28nXG4gICAgdGhpcy5jb2RlID0gY29kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlc3Nhb1BhcmEgKHVybDogc3RyaW5nKTogYW55IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzbSA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICByZXR1cm4gc20uZ2V0U2Vzc2lvbkJ5VXJsKHVybCkgfHwgc20uZ2V0TWFpblNlc3Npb24oKSB8fCBudWxsXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0ZW1TZXNzYW8gPSAodXJsOiBzdHJpbmcpOiBib29sZWFuID0+ICEhc2Vzc2FvUGFyYSh1cmwpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnRyYXIgKGZvcmNhciA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuc2lnbkluKHsgcG9wdXA6IHRydWUsIGZvcmNlTG9naW46IGZvcmNhciB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXN1YXJpb0F0dWFsICgpOiBzdHJpbmcge1xuICB0cnkge1xuICAgIGNvbnN0IHM6IGFueSA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICAgIHJldHVybiBzPy51c2VybmFtZSB8fCAnJ1xuICB9IGNhdGNoIChlKSB7IHJldHVybiAnJyB9XG59XG5cbmNvbnN0IENPRElHT1NfU0VTU0FPID0gWzQwMSwgNDAzLCA0OTgsIDQ5OV1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3QgKHVybDogc3RyaW5nLCBwYXJhbXM6IHsgW2s6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgcyA9IHNlc3Nhb1BhcmEodXJsKVxuICBsZXQgdGs6IHN0cmluZyB8IG51bGxcbiAgdHJ5IHsgdGsgPSBzID8gYXdhaXQgcy5nZXRUb2tlbih1cmwpIDogbnVsbCB9IGNhdGNoIChlKSB7IHRrID0gbnVsbCB9XG4gIGlmICghdGspIHRocm93IG5ldyBFcnJvU2Vzc2FvKClcbiAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiB7XG4gICAgY29uc3QgdiA9IHBhcmFtc1trXVxuICAgIGJvZHkuYXBwZW5kKGssIHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBKU09OLnN0cmluZ2lmeSh2KSlcbiAgfSlcbiAgYm9keS5hcHBlbmQoJ2YnLCAnanNvbicpXG4gIGJvZHkuYXBwZW5kKCd0b2tlbicsIHRrKVxuICBsZXQgcjogUmVzcG9uc2VcbiAgdHJ5IHtcbiAgICByID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5IH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbSBjb25leMOjbyBjb20gbyBzZXJ2acOnby4gVmVyaWZpcXVlIGEgaW50ZXJuZXQgZSB0ZW50ZSBkZSBub3ZvLicpXG4gIH1cbiAgaWYgKENPRElHT1NfU0VTU0FPLmluY2x1ZGVzKHIuc3RhdHVzKSkgdGhyb3cgbmV3IEVycm9TZXNzYW8oJ1N1YSBzZXNzw6NvIGV4cGlyb3Ugb3UgbsOjbyB0ZW0gYWNlc3NvIGEgZXN0ZSBzZXJ2acOnby4nKVxuICBsZXQgajogYW55XG4gIHRyeSB7IGogPSBhd2FpdCByLmpzb24oKSB9IGNhdGNoIChlKSB7IHRocm93IG5ldyBFcnJvcihgUmVzcG9zdGEgaW52w6FsaWRhIGRvIHNlcnZpw6dvIChIVFRQICR7ci5zdGF0dXN9KWApIH1cbiAgaWYgKGo/LmVycm9yKSB7XG4gICAgY29uc3QgY29kID0gTnVtYmVyKGouZXJyb3IuY29kZSlcbiAgICBpZiAoQ09ESUdPU19TRVNTQU8uaW5jbHVkZXMoY29kKSkgdGhyb3cgbmV3IEVycm9TZXNzYW8oY29kID09PSA0MDMgPyAnU3VhIGNvbnRhIG7Do28gdGVtIHBlcm1pc3PDo28gbmVzdGUgc2VydmnDp28uJyA6ICdTdWEgc2Vzc8OjbyBleHBpcm91LiBFbnRyZSBub3ZhbWVudGUuJylcbiAgICBjb25zdCBkZXQgPSBBcnJheS5pc0FycmF5KGouZXJyb3IuZGV0YWlscykgJiYgai5lcnJvci5kZXRhaWxzLmxlbmd0aCA/IGAgKCR7ai5lcnJvci5kZXRhaWxzLmpvaW4oJzsgJyl9KWAgOiAnJ1xuICAgIHRocm93IG5ldyBFcnJvU2Vydmljbygoai5lcnJvci5tZXNzYWdlIHx8ICdFcnJvIG5vIHNlcnZpw6dvJykgKyBkZXQsIGNvZClcbiAgfVxuICByZXR1cm4galxufVxuXG4vKiogQnVzY2EgdG9kYXMgYXMgcMOhZ2luYXMgZGUgdW1hIHF1ZXJ5IChyZXNwZWl0YSBvIG1heFJlY29yZENvdW50IGRvIHNlcnZpw6dvKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeVR1ZG8gKHVybDogc3RyaW5nLCBwYXJhbXM6IHsgW2s6IHN0cmluZ106IGFueSB9LCBwYWdpbmEgPSAxMDAwKTogUHJvbWlzZTxhbnlbXT4ge1xuICBjb25zdCBvdXQ6IGFueVtdID0gW11cbiAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgNTAwMDA7IG9mZnNldCArPSBwYWdpbmEpIHtcbiAgICBjb25zdCBqID0gYXdhaXQgcmVzdCh1cmwsIHsgLi4ucGFyYW1zLCByZXN1bHRPZmZzZXQ6IFN0cmluZyhvZmZzZXQpLCByZXN1bHRSZWNvcmRDb3VudDogU3RyaW5nKHBhZ2luYSkgfSlcbiAgICBjb25zdCBmID0gai5mZWF0dXJlcyB8fCBbXVxuICAgIG91dC5wdXNoKC4uLmYpXG4gICAgaWYgKCFqLmV4Y2VlZGVkVHJhbnNmZXJMaW1pdCB8fCAhZi5sZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5jb25zdCBwMiA9IChuOiBudW1iZXIpID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCAnMCcpXG4vKiogJ1lZWVktTU0tREQgSEg6TU06U1MnIGVtIFVUQywgcGFyYSBUSU1FU1RBTVAgJy4uLicgKFNRTCBwYWRyb25pemFkbyBkbyBBcmNHSVMgT25saW5lKSAqL1xuZXhwb3J0IGNvbnN0IHNxbFRzID0gKGQ6IERhdGUpID0+XG4gIGAke2QuZ2V0VVRDRnVsbFllYXIoKX0tJHtwMihkLmdldFVUQ01vbnRoKCkgKyAxKX0tJHtwMihkLmdldFVUQ0RhdGUoKSl9ICR7cDIoZC5nZXRVVENIb3VycygpKX06JHtwMihkLmdldFVUQ01pbnV0ZXMoKSl9OiR7cDIoZC5nZXRVVENTZWNvbmRzKCkpfWBcbmV4cG9ydCBjb25zdCBzcWxEYXRlID0gKGQ6IERhdGUpID0+IGAke2QuZ2V0RnVsbFllYXIoKX0tJHtwMihkLmdldE1vbnRoKCkgKyAxKX0tJHtwMihkLmdldERhdGUoKSl9YFxuXG4vKiogSW50ZXJ2YWxvIGRlIGRhdGFzIFtpbmksIGZpbSkgbm8gY2FtcG8gaW5mb3JtYWRvOyB1c2EgREFURSAnLi4uJyBzZSBvIHNlcnZpw6dvIHJlY3VzYXIgVElNRVNUQU1QLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5UG9yRGF0YSAodXJsOiBzdHJpbmcsIGludGVydmFsbzogeyBjYW1wbzogc3RyaW5nLCBpbmk6IERhdGUsIGZpbTogRGF0ZSwgZXh0cmE/OiBzdHJpbmcgfSwgcGFyYW1zOiB7IFtrOiBzdHJpbmddOiBhbnkgfSwgcGFnaW5hID0gMTAwMCkge1xuICBjb25zdCB7IGNhbXBvLCBpbmksIGZpbSwgZXh0cmEgfSA9IGludGVydmFsb1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBxdWVyeVR1ZG8odXJsLCB7IC4uLnBhcmFtcywgd2hlcmU6IGAke2NhbXBvfSA+PSBUSU1FU1RBTVAgJyR7c3FsVHMoaW5pKX0nIEFORCAke2NhbXBvfSA8IFRJTUVTVEFNUCAnJHtzcWxUcyhmaW0pfScke2V4dHJhID8gYCBBTkQgJHtleHRyYX1gIDogJyd9YCB9LCBwYWdpbmEpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIShlIGluc3RhbmNlb2YgRXJyb1NlcnZpY28pIHx8IGUuY29kZSAhPT0gNDAwKSB0aHJvdyBlXG4gICAgcmV0dXJuIGF3YWl0IHF1ZXJ5VHVkbyh1cmwsIHsgLi4ucGFyYW1zLCB3aGVyZTogYCR7Y2FtcG99ID49IERBVEUgJyR7c3FsRGF0ZShpbmkpfScgQU5EICR7Y2FtcG99IDwgREFURSAnJHtzcWxEYXRlKGZpbSl9JyR7ZXh0cmEgPyBgIEFORCAke2V4dHJhfWAgOiAnJ31gIH0sIHBhZ2luYSlcbiAgfVxufVxuXG4vKiogRXNjYXBhIHVtIHZhbG9yIGRlIHRleHRvIHBhcmEgU1FMLiAqL1xuZXhwb3J0IGNvbnN0IHNxbFN0ciA9IChzOiBzdHJpbmcpID0+IGAnJHtTdHJpbmcocykucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgXG5cbi8qKiBIb29rIGRlIHNlc3PDo286IGxvZ2FkbywgbWVuc2FnZW0sIGZ1bsOnw6NvIGRlIGxvZ2luIGUgXCJ0cmF0YXJcIiBwYXJhIGVycm9zIGRlIHNlc3PDo28uICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU2Vzc2FvICh1cmw6IHN0cmluZykge1xuICBjb25zdCBbbG9nYWRvLCBzZXRMb2dhZG9dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oKCkgPT4gIXVybCB8fCB0ZW1TZXNzYW8odXJsKSlcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW50cmFuZG8sIHNldEVudHJhbmRvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dhZG8gfHwgIXVybCB8fCBtc2cpIHJldHVyblxuICAgIGNvbnN0IHQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4geyBpZiAodGVtU2Vzc2FvKHVybCkpIHNldExvZ2Fkbyh0cnVlKSB9LCAxNTAwKVxuICAgIHJldHVybiAoKSA9PiB7IHdpbmRvdy5jbGVhckludGVydmFsKHQpIH1cbiAgfSwgW2xvZ2FkbywgdXJsLCBtc2ddKVxuICBjb25zdCB0cmF0YXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogYW55KSA9PiB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvU2Vzc2FvKSB7IHNldExvZ2FkbyhmYWxzZSk7IHNldE1zZyhlLm1lc3NhZ2UpOyByZXR1cm4gdHJ1ZSB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIFtdKVxuICBjb25zdCBsb2dpbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRFbnRyYW5kbyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBlbnRyYXIodGVtU2Vzc2FvKHVybCkpXG4gICAgICBzZXRNc2coJycpOyBzZXRMb2dhZG8odHJ1ZSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIHNldE1zZyhlPy5tZXNzYWdlID8gYE7Do28gZm9pIHBvc3PDrXZlbCBlbnRyYXI6ICR7ZS5tZXNzYWdlfWAgOiAnTG9naW4gY2FuY2VsYWRvLicpXG4gICAgfSBmaW5hbGx5IHsgc2V0RW50cmFuZG8oZmFsc2UpIH1cbiAgfSwgW3VybF0pXG4gIHJldHVybiB7IGxvZ2FkbywgbXNnLCBlbnRyYW5kbywgdHJhdGFyLCBsb2dpbiB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJlY29ydGUgdGVycml0b3JpYWwgY29tcGFydGlsaGFkbyAoRGlyZXRvcmlhIOKAuiBNdW5pY8OtcGlvIOKAuiBTZXRvcilcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBpbnRlcmZhY2UgVGVycml0b3JpbyB7IGRpcnM6IHN0cmluZ1tdLCBtdW5pY2lwaW9zOiBzdHJpbmdbXSwgc2V0b3Jlczogc3RyaW5nW10gfVxuZXhwb3J0IGNvbnN0IFRFUlJJVE9SSU9fVkFaSU86IFRlcnJpdG9yaW8gPSB7IGRpcnM6IFtdLCBtdW5pY2lwaW9zOiBbXSwgc2V0b3JlczogW10gfVxuY29uc3QgQ0hBVkUgPSAncGM0MDMtdGVycml0b3JpbydcbmNvbnN0IEVWRU5UTyA9ICdwYzQwMy10ZXJyaXRvcmlvJ1xuXG5mdW5jdGlvbiBsZXJUZXJyaXRvcmlvICgpOiBUZXJyaXRvcmlvIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ID0gSlNPTi5wYXJzZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDSEFWRSkgfHwgJ3t9JylcbiAgICByZXR1cm4ge1xuICAgICAgZGlyczogQXJyYXkuaXNBcnJheSh0LmRpcnMpID8gdC5kaXJzIDogW10sXG4gICAgICBtdW5pY2lwaW9zOiBBcnJheS5pc0FycmF5KHQubXVuaWNpcGlvcykgPyB0Lm11bmljaXBpb3MgOiBbXSxcbiAgICAgIHNldG9yZXM6IEFycmF5LmlzQXJyYXkodC5zZXRvcmVzKSA/IHQuc2V0b3JlcyA6IFtdXG4gICAgfVxuICB9IGNhdGNoIChlKSB7IHJldHVybiBURVJSSVRPUklPX1ZBWklPIH1cbn1cbmxldCB0ZXJyaXRvcmlvQXR1YWw6IFRlcnJpdG9yaW8gPSBsZXJUZXJyaXRvcmlvKClcblxuZXhwb3J0IGNvbnN0IGdldFRlcnJpdG9yaW8gPSAoKSA9PiB0ZXJyaXRvcmlvQXR1YWxcbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXJyaXRvcmlvICh0OiBUZXJyaXRvcmlvIHwgKChhdHVhbDogVGVycml0b3JpbykgPT4gVGVycml0b3JpbykpIHtcbiAgY29uc3Qgbm92byA9IHR5cGVvZiB0ID09PSAnZnVuY3Rpb24nID8gdCh0ZXJyaXRvcmlvQXR1YWwpIDogdFxuICBpZiAoSlNPTi5zdHJpbmdpZnkobm92bykgPT09IEpTT04uc3RyaW5naWZ5KHRlcnJpdG9yaW9BdHVhbCkpIHJldHVyblxuICB0ZXJyaXRvcmlvQXR1YWwgPSBub3ZvXG4gIHRyeSB7IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENIQVZFLCBKU09OLnN0cmluZ2lmeShub3ZvKSkgfSBjYXRjaCAoZSkgeyAvKiBzZW0gc3RvcmFnZSAqLyB9XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChFVkVOVE8sIHsgZGV0YWlsOiBub3ZvIH0pKVxufVxuZXhwb3J0IGNvbnN0IHNlbGVjaW9uYXJTZXRvciA9IChpZFNldG9yOiBzdHJpbmcsIGRpciA9ICcnLCBtdW5pY2lwaW8gPSAnJykgPT5cbiAgeyBzZXRUZXJyaXRvcmlvKHsgZGlyczogZGlyID8gW2Rpcl0gOiBbXSwgbXVuaWNpcGlvczogbXVuaWNpcGlvID8gW211bmljaXBpb10gOiBbXSwgc2V0b3JlczogaWRTZXRvciA/IFtpZFNldG9yXSA6IFtdIH0pIH1cbmV4cG9ydCBjb25zdCBsaW1wYXJUZXJyaXRvcmlvID0gKCkgPT4geyBzZXRUZXJyaXRvcmlvKFRFUlJJVE9SSU9fVkFaSU8pIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRlcnJpdG9yaW8gKCk6IFRlcnJpdG9yaW8ge1xuICBjb25zdCBbdCwgc2V0VF0gPSBSZWFjdC51c2VTdGF0ZTxUZXJyaXRvcmlvPih0ZXJyaXRvcmlvQXR1YWwpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZiA9IChlOiBFdmVudCkgPT4geyBzZXRUKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwpIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVE8sIGYpXG4gICAgc2V0VCh0ZXJyaXRvcmlvQXR1YWwpXG4gICAgcmV0dXJuICgpID0+IHsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRPLCBmKSB9XG4gIH0sIFtdKVxuICByZXR1cm4gdFxufVxuZXhwb3J0IGNvbnN0IHRlbVJlY29ydGUgPSAodDogVGVycml0b3JpbykgPT4gdC5kaXJzLmxlbmd0aCArIHQubXVuaWNpcGlvcy5sZW5ndGggKyB0LnNldG9yZXMubGVuZ3RoID4gMFxuZXhwb3J0IGNvbnN0IHNldG9yVW5pY28gPSAodDogVGVycml0b3Jpbyk6IHN0cmluZyB8IG51bGwgPT4gKHQuc2V0b3Jlcy5sZW5ndGggPT09IDEgPyB0LnNldG9yZXNbMF0gOiBudWxsKVxuXG4vKiogXCIxMDBfMDMxXCIgYSBwYXJ0aXIgZGUgaWRfc2V0b3Igb3UgZGUgY29kaWdvX211bmljaXBpbyArIGNvZGlnb19zZXRvci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZFNldG9yIChhOiB7IFtrOiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XG4gIGlmIChhLmlkX3NldG9yICYmIC9eXFxkezN9X1xcZHszfSQvLnRlc3QoU3RyaW5nKGEuaWRfc2V0b3IpKSkgcmV0dXJuIFN0cmluZyhhLmlkX3NldG9yKVxuICBjb25zdCBtID0gTnVtYmVyKGEuY29kaWdvX211bmljaXBpbyk7IGNvbnN0IHMgPSBOdW1iZXIoYS5jb2RpZ29fc2V0b3IpXG4gIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG0pICYmIE51bWJlci5pc0ludGVnZXIocykgPyBgJHtTdHJpbmcobSkucGFkU3RhcnQoMywgJzAnKX1fJHtTdHJpbmcocykucGFkU3RhcnQoMywgJzAnKX1gIDogJydcbn1cblxuLyoqIExpbmhhcyBkYSBjYW1hZGEgZGUgc2V0b3JlcyBxdWUgcGFzc2FtIG5vIHJlY29ydGUuICovXG5leHBvcnQgZnVuY3Rpb24gbm9SZWNvcnRlPFQgZXh0ZW5kcyB7IFtrOiBzdHJpbmddOiBhbnkgfT4gKHJvd3M6IFRbXSwgdDogVGVycml0b3Jpbyk6IFRbXSB7XG4gIHJldHVybiByb3dzLmZpbHRlcihyID0+XG4gICAgKCF0LmRpcnMubGVuZ3RoIHx8IHQuZGlycy5pbmNsdWRlcyhTdHJpbmcoci5kaXJfb3BlcmFjaW9uYWwgfHwgJycpKSkgJiZcbiAgICAoIXQubXVuaWNpcGlvcy5sZW5ndGggfHwgdC5tdW5pY2lwaW9zLmluY2x1ZGVzKFN0cmluZyhyLm11bmljaXBpbyB8fCAnJykpKSAmJlxuICAgICghdC5zZXRvcmVzLmxlbmd0aCB8fCB0LnNldG9yZXMuaW5jbHVkZXMoaWRTZXRvcihyKSkpKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOYXZlZ2HDp8OjbyBlbnRyZSBww6FnaW5hcyAocGVsbyByw7N0dWxvLCBzZW0gZGVwZW5kZXIgZGUgaWRzIGRvIGNvbmZpZylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBub3JtS2V5ID0gKHM6IGFueSkgPT4gU3RyaW5nKHMgPz8gJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW8yALc2vXS9nLCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKClcblxuLyoqIE8gYXBwIGF0dWFsIHRlbSB1bWEgcMOhZ2luYSBjb20gZXNzZSByw7N0dWxvPyAobyBtZXNtbyB3aWRnZXQgc2VydmUgYW8gYXBwIGludGVybm8gZSBhbyBhcHAgZGEgU2FiZXNwKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYUV4aXN0ZSAocm90dWxvOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYWdlcyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWc/LnBhZ2VzIHx8IHt9XG4gICAgY29uc3QgYWx2byA9IG5vcm1LZXkocm90dWxvKVxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHBhZ2VzKS5zb21lKCh4OiBhbnkpID0+IHguaXNWaXNpYmxlICE9PSBmYWxzZSAmJiBub3JtS2V5KHgubGFiZWwpLmluY2x1ZGVzKGFsdm8pKVxuICB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpclBhcmFQYWdpbmEgKHJvdHVsbzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFnZXMgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnPy5wYWdlcyB8fCB7fVxuICAgIGNvbnN0IGFsdm8gPSBub3JtS2V5KHJvdHVsbylcbiAgICBjb25zdCBwOiBhbnkgPSBPYmplY3QudmFsdWVzKHBhZ2VzKS5maW5kKCh4OiBhbnkpID0+IG5vcm1LZXkoeC5sYWJlbCkgPT09IGFsdm8pIHx8XG4gICAgICBPYmplY3QudmFsdWVzKHBhZ2VzKS5maW5kKCh4OiBhbnkpID0+IG5vcm1LZXkoeC5sYWJlbCkuaW5jbHVkZXMoYWx2bykpXG4gICAgaWYgKCFwKSByZXR1cm4gZmFsc2VcbiAgICBqaW11SGlzdG9yeS5jaGFuZ2VQYWdlKHAuaWQpXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2UgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb23DrW5pb1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IEVUQVBBUyA9IFtcbiAgeyBrOiAnMDFfVE9QT0xPR0lBJywgcDogJ3RvcCcsIGdvdjogJ3RvcG9sb2dpYScsIG5vbWU6ICdUb3BvbG9naWEnLCBzaWdsYTogJ1RvcCcsIGNvcjogJyMzYjZlOGYnIH0sXG4gIHsgazogJzAyX0NBTElCUkFDQU8nLCBwOiAnY2FsJywgZ292OiAnY2FsaWJyYWNhbycsIG5vbWU6ICdDYWxpYnJhw6fDo28nLCBzaWdsYTogJ0NhbCcsIGNvcjogJyM2ODdiNTgnIH0sXG4gIHsgazogJzAzX0NPTkNFUENBTycsIHA6ICdjb24nLCBnb3Y6ICdjb25jZXBjYW8nLCBub21lOiAnQ29uY2Vww6fDo28nLCBzaWdsYTogJ0NvbicsIGNvcjogJyNjMDhhMmUnIH0sXG4gIHsgazogJzA0X1BBQ09URV9URUNOSUNPJywgcDogJ3B0JywgZ292OiAncGFjb3RlX3RlY25pY28nLCBub21lOiAnUGFjb3RlIFTDqWNuaWNvJywgc2lnbGE6ICdQVCcsIGNvcjogJyM4YTVhODMnIH1cbl0gYXMgY29uc3RcblxuLyoqIFwiYXRpdmlkYWRlXCIgbsOjbyB0ZW0gZG9tw61uaW8gbm8gc2VydmnDp286IHLDs3R1bG9zIGRvIFhMU0Zvcm0gKGxpc3RhIGF0aXZpZGFkZXNfbW9kZWxhZ2VtKS4gKi9cbmV4cG9ydCBjb25zdCBBVElWSURBREVTOiBBcnJheTx7IGNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBldGFwYTogc3RyaW5nIH0+ID0gW1xuICB7IGNvZGU6ICd0b3BvX2NvbnN0cnVjYW9fbW9kZWxvcycsIG5hbWU6ICdDb25zdHJ1w6fDo28gZGUgbW9kZWxvcycsIGV0YXBhOiAndG9wb2xvZ2lhJyB9LFxuICB7IGNvZGU6ICd0b3BvX3JldW5pYW9fdGVjbmljYScsIG5hbWU6ICdSZXVuacOjbyB0w6ljbmljYScsIGV0YXBhOiAndG9wb2xvZ2lhJyB9LFxuICB7IGNvZGU6ICd0b3BvX2FqdXN0ZV9maW5hbCcsIG5hbWU6ICdBanVzdGUgZmluYWwnLCBldGFwYTogJ3RvcG9sb2dpYScgfSxcbiAgeyBjb2RlOiAndG9wb19kZWZpbmlyX3BvbnRvcycsIG5hbWU6ICdEZWZpbmlyIHBvbnRvcycsIGV0YXBhOiAndG9wb2xvZ2lhJyB9LFxuICB7IGNvZGU6ICdjYWxfY2FycmVnYW1lbnRvX2RhZG9zJywgbmFtZTogJ0NhcnJlZ2FtZW50byBkb3MgZGFkb3MgZGUgY2FtcG8nLCBldGFwYTogJ2NhbGlicmFjYW8nIH0sXG4gIHsgY29kZTogJ2NhbF9hZGVxdWFjb2VzX3NpbXVsYWNhbycsIG5hbWU6ICdBZGVxdWHDp8O1ZXMgbmEgc2ltdWxhw6fDo28nLCBldGFwYTogJ2NhbGlicmFjYW8nIH0sXG4gIHsgY29kZTogJ2NhbF9yZXVuaWFvX3BvbG8nLCBuYW1lOiAnUmV1bmnDo28gZGUgYXByZXNlbnRhw6fDo28gcGFyYSBvIHBvbG8nLCBldGFwYTogJ2NhbGlicmFjYW8nIH0sXG4gIHsgY29kZTogJ2NhbF9yZWxhdG9yaW8nLCBuYW1lOiAnRWxhYm9yYcOnw6NvIGRlIHJlbGF0w7NyaW8nLCBldGFwYTogJ2NhbGlicmFjYW8nIH0sXG4gIHsgY29kZTogJ2NvbmNfY2VuYXJpb3MnLCBuYW1lOiAnQ29uc3RydcOnw6NvIGUgY29uZmlndXJhw6fDo28gZG9zIGNlbsOhcmlvcycsIGV0YXBhOiAnY29uY2VwY2FvJyB9LFxuICB7IGNvZGU6ICdjb25jX3Byb3Bvc3RhcycsIG5hbWU6ICdFbGFib3Jhw6fDo28gZGFzIHByb3Bvc3RhcycsIGV0YXBhOiAnY29uY2VwY2FvJyB9LFxuICB7IGNvZGU6ICdjb25jX3JldW5pYW9fcG9sbycsIG5hbWU6ICdSZXVuacOjbyBkZSBhcHJlc2VudGHDp8OjbyBwYXJhIG8gcG9sbycsIGV0YXBhOiAnY29uY2VwY2FvJyB9LFxuICB7IGNvZGU6ICdjb25jX3JlbGF0b3JpbycsIG5hbWU6ICdFbGFib3Jhw6fDo28gZG8gcmVsYXTDs3JpbycsIGV0YXBhOiAnY29uY2VwY2FvJyB9XG5dXG5cbi8qKiBJdGVucyBkYSBnb3Zlcm5hbsOnYSAoU3VydmV5KSBwb3IgZmFzZSwgY29tbyBubyBFV0EgMzYwLiAqL1xuZXhwb3J0IGNvbnN0IEZBU0VTX0dPViA9IFtcbiAgeyBub21lOiAnVG9wb2xvZ2lhJywgY2FtcG9zOiBbJ2NhZGFzdHJvX3JlZGVfc3RhdHVzJywgJ21pY3JvbWVkaWNhb19zdGF0dXMnLCAncmVzZXJ2YXRvcmlvX3N0YXR1cycsICd2cnBfc3RhdHVzJywgJ2Jvb19zdGF0dXMnLCAnYWx0aW1ldHJpYV9zdGF0dXMnLCAnY29uc3RydWNhb19tb2RlbG9faGQnXSB9LFxuICB7IG5vbWU6ICdDYWxpYnJhw6fDo28nLCBjYW1wb3M6IFsncG9udG9zX2NhbGlicmFjYW9fc3RhdHVzJywgJ2NhbXBhbmhhX212cF9zdGF0dXMnLCAnbGltdGVzX3N0YXR1cycsICdtb2RlbG9fZXNwYW5ldF9zdGF0dXMnLCAnbW9kZWxvX3dhdGVyZ2Vtc19zdGF0dXMnXSB9LFxuICB7IG5vbWU6ICdDb25jZXDDp8O1ZXMnLCBjYW1wb3M6IFsnY2VuYXJpb3Nfc3RhdHVzJywgJ3JlbGF0b3Jpb193b3JkX3N0YXR1cycsICdyZWxhdG9yaW9fcGRmX3N0YXR1cyddIH0sXG4gIHsgbm9tZTogJ1BhY290ZSB0w6ljbmljbycsIGNhbXBvczogWydtZW1vcmlhaXNfc3RhdHVzJywgJ2Rlc2VuaG9zX3N0YXR1cycsICdkb2N1bWVudGFjYW9fdGVjbmljYV9zdGF0dXMnLCAnZXNwZWNfdGVjX3N0YXR1cycsICdwbGFuaWxoYV9xdWFudF9zdGF0dXMnLCAncmVndWxhX3ByZWNvX3N0YXR1cycsICdwbGFuX29yY2Ffc3RhdHVzJywgJ2Nyb19maXNpX2ZpbmFfc3RhdHVzJ10gfVxuXVxuLyoqICUgY29uZm9ybWUgKGNvbmZvcm1lID0gMTAwJSwgZGVtYWlzID0gMCUsIFwibsOjbyBhcGxpY8OhdmVsXCIgZm9yYSBkYSBjb250YSkuICovXG5leHBvcnQgZnVuY3Rpb24gcGN0Q29uZm9ybWUgKHJvdzogeyBbazogc3RyaW5nXTogYW55IH0sIGNhbXBvczogc3RyaW5nW10pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgdmFsaWRvcyA9IGNhbXBvcy5maWx0ZXIoYyA9PiBub3JtS2V5KHJvd1tjXSkgIT09ICduYW9fYXBsaWNhdmVsJylcbiAgcmV0dXJuIHZhbGlkb3MubGVuZ3RoID8gdmFsaWRvcy5maWx0ZXIoYyA9PiBub3JtS2V5KHJvd1tjXSkgPT09ICdjb25mb3JtZScpLmxlbmd0aCAvIHZhbGlkb3MubGVuZ3RoICogMTAwIDogbnVsbFxufVxuZXhwb3J0IGZ1bmN0aW9uIHBjdEdvdmVybmFuY2EgKHJvdzogeyBbazogc3RyaW5nXTogYW55IH0pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgdiA9IEZBU0VTX0dPVi5tYXAoZiA9PiBwY3RDb25mb3JtZShyb3csIGYuY2FtcG9zKSkuZmlsdGVyKHggPT4geCAhPT0gbnVsbClcbiAgcmV0dXJuIHYubGVuZ3RoID8gdi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHYubGVuZ3RoIDogbnVsbFxufVxuZXhwb3J0IGNvbnN0IFJPVFVMT19TVEFUVVM6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICBjb25mb3JtZTogJ0NvbmZvcm1lJywgaW5jb21wbGV0bzogJ0luY29tcGxldG8nLCBuYW9fcmVjZWJpZG86ICdOw6NvIHJlY2ViaWRvJywgcGVuZGVudGU6ICdQZW5kZW50ZScsIG5hb19hcGxpY2F2ZWw6ICdOw6NvIHNlIGFwbGljYSdcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRm9ybWF0YcOnw6NvXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgZm10TnVtID0gKHY6IG51bWJlciwgY2FzYXMgPSAwKSA9PiAoTnVtYmVyLmlzRmluaXRlKHYpID8gdi50b0xvY2FsZVN0cmluZygncHQtQlInLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogY2FzYXMsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA6ICfigJQnKVxuZXhwb3J0IGNvbnN0IGZtdEggPSAoaDogbnVtYmVyKSA9PiBmbXROdW0oTWF0aC5yb3VuZChoICogMTAwKSAvIDEwMCwgMilcbmV4cG9ydCBjb25zdCBmbXRQY3QgPSAodjogbnVtYmVyIHwgbnVsbCwgY2FzYXMgPSAxKSA9PiAodiA9PSBudWxsIHx8ICFOdW1iZXIuaXNGaW5pdGUodikgPyAn4oCUJyA6IGAke3YudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGNhc2FzLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGNhc2FzIH0pfSVgKVxuZXhwb3J0IGNvbnN0IGZtdERhdGEgPSAobXM6IG51bWJlciB8IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKG1zID09IG51bGwgfHwgbXMgPT09ICcnKSByZXR1cm4gJ+KAlCdcbiAgY29uc3QgZCA9IHR5cGVvZiBtcyA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZShtcykgOiBuZXcgRGF0ZShgJHttc31UMTI6MDA6MDBgKVxuICByZXR1cm4gTnVtYmVyLmlzTmFOKGQuZ2V0VGltZSgpKSA/ICfigJQnIDogZC50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJylcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmlzdWFsIEVXQSAoY29yZXMgZSBjbGFzc2VzIGJhc2UsIHByZWZpeG8gLnBjNClcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBDT1IgPSB7XG4gIHZlcmRlOiAnIzY4N0I1OCcsIHZlcmRlRXNjOiAnIzRmNWY0MicsIGF6dWw6ICcjMUYzQjREJywgYXp1bE1lZDogJyMyYzRhNWUnLCBwYWxpZG86ICcjRjRGN0YyJywgbGluaGE6ICcjRDdFMUQ0JyxcbiAgdGV4dG86ICcjMzE0MzRCJywgbXVkbzogJyM2MDcyN2EnLCBkZXN0YXF1ZTogJyMxOTgzYWQnLCBvazogJyMyNDdjNGInLCBva0Z1bmRvOiAnI2UxZjJlOCcsIGFsZXJ0YTogJyNhZDZiMTInLFxuICBhbGVydGFGdW5kbzogJyNmZmYwZDknLCBuZXV0cm86ICcjNjY3NzgxJywgbmV1dHJvRnVuZG86ICcjZWRmMWYyJywgZXJybzogJyNiMjNiM2InLCBlcnJvRnVuZG86ICcjZmJlYWVhJ1xufVxuXG5leHBvcnQgY29uc3QgQ1NTX0JBU0UgPSBgXG4ucGM0ey0tdmVyZGU6JHtDT1IudmVyZGV9Oy0tdmVyZGUtZXNjOiR7Q09SLnZlcmRlRXNjfTstLWF6dWw6JHtDT1IuYXp1bH07LS1henVsLW1lZDoke0NPUi5henVsTWVkfTstLXBhbGlkbzoke0NPUi5wYWxpZG99Oy0tbGluaGE6JHtDT1IubGluaGF9O1xuICAtLXRleHRvOiR7Q09SLnRleHRvfTstLW11ZG86JHtDT1IubXVkb307LS1kZXN0YXF1ZToke0NPUi5kZXN0YXF1ZX07LS1vazoke0NPUi5va307LS1vay1mOiR7Q09SLm9rRnVuZG99Oy0tYWxlcnRhOiR7Q09SLmFsZXJ0YX07LS1hbGVydGEtZjoke0NPUi5hbGVydGFGdW5kb307XG4gIC0tbmV1dHJvOiR7Q09SLm5ldXRyb307LS1uZXV0cm8tZjoke0NPUi5uZXV0cm9GdW5kb307LS1lcnJvOiR7Q09SLmVycm99Oy0tZXJyby1mOiR7Q09SLmVycm9GdW5kb307XG4gIGZvbnQtZmFtaWx5OlwiU2Vnb2UgVUlcIixBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOnZhcigtLXRleHRvKTtib3gtc2l6aW5nOmJvcmRlci1ib3h9XG4ucGM0ICp7Ym94LXNpemluZzpib3JkZXItYm94fVxuLnBjNCBidXR0b257Zm9udDppbmhlcml0O2N1cnNvcjpwb2ludGVyfVxuLnBjNCBidXR0b246ZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNX1cbi5wYzQgc3Zne2ZsZXgtc2hyaW5rOjB9XG4ucGM0LWNhcmR7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5oYSk7Ym9yZGVyLXJhZGl1czo4cHg7YmFja2dyb3VuZDojZmZmO292ZXJmbG93OmhpZGRlbjttYXJnaW4tYm90dG9tOjEwcHg7bWluLXdpZHRoOjB9XG4ucGM0LWNhcmQtaHtiYWNrZ3JvdW5kOnZhcigtLXZlcmRlKTtjb2xvcjojZmZmO3BhZGRpbmc6OXB4IDEycHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOi4wNGVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHh9XG4ucGM0LWNhcmQtaCAucnR7bWFyZ2luLWxlZnQ6YXV0bztkaXNwbGF5OmZsZXg7Z2FwOjRweDthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTtsZXR0ZXItc3BhY2luZzowO2ZvbnQtd2VpZ2h0OjYwMH1cbi5wYzQtY2FyZC1oIGJ1dHRvbi5pY3tjb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOCk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweDttaW4td2lkdGg6MjJweDtoZWlnaHQ6MjBweDtwYWRkaW5nOjAgNHB4O2xpbmUtaGVpZ2h0OjF9XG4ucGM0LWNhcmQtYntwYWRkaW5nOjExcHggMTNweH1cbi5wYzQtbXVkb3tjb2xvcjp2YXIoLS1tdWRvKTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjV9XG4ucGM0LXBlcXVlbm97Zm9udC1zaXplOjExcHh9XG4ucGM0LXRpdHtjb2xvcjp2YXIoLS1henVsKTtmb250LXdlaWdodDo3MDB9XG4ucGM0LWJ0bntib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmhhKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6dmFyKC0tYXp1bCk7Ym9yZGVyLXJhZGl1czo2cHg7cGFkZGluZzo2cHggMTBweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweH1cbi5wYzQtYnRuOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tcGFsaWRvKX1cbi5wYzQtYnRuLnByaXtiYWNrZ3JvdW5kOnZhcigtLXZlcmRlKTtib3JkZXItY29sb3I6dmFyKC0tdmVyZGUpO2NvbG9yOiNmZmZ9XG4ucGM0LWJ0bi5wcmk6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS12ZXJkZS1lc2MpfVxuLnBjNC1idG4uZXNje2JhY2tncm91bmQ6dmFyKC0tYXp1bCk7Ym9yZGVyLWNvbG9yOnZhcigtLWF6dWwpO2NvbG9yOiNmZmZ9XG4ucGM0LXNlZ3tkaXNwbGF5OmZsZXg7Z2FwOjRweH1cbi5wYzQtc2VnIGJ1dHRvbntmbGV4OjE7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5oYSk7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzo1cHggNHB4O2JhY2tncm91bmQ6I2ZmZjtjb2xvcjp2YXIoLS1henVsKTtmb250LXNpemU6MTFweH1cbi5wYzQtc2VnIGJ1dHRvbi5vbntiYWNrZ3JvdW5kOnZhcigtLWF6dWwpO2JvcmRlci1jb2xvcjp2YXIoLS1henVsKTtjb2xvcjojZmZmfVxuLnBjNC1iYXJ7aGVpZ2h0OjlweDtiYWNrZ3JvdW5kOiNlOWVlZTc7Ym9yZGVyLXJhZGl1czo1cHg7b3ZlcmZsb3c6aGlkZGVufVxuLnBjNC1iYXIgPiBpe2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDp2YXIoLS12ZXJkZSk7Ym9yZGVyLXJhZGl1czo1cHh9XG4ucGM0LXN0e2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzoycHggNnB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTFweDt3aGl0ZS1zcGFjZTpub3dyYXB9XG4ucGM0LXN0LmNvbmZvcm1le2JhY2tncm91bmQ6dmFyKC0tb2stZik7Y29sb3I6dmFyKC0tb2spfVxuLnBjNC1zdC5pbmNvbXBsZXRve2JhY2tncm91bmQ6dmFyKC0tYWxlcnRhLWYpO2NvbG9yOnZhcigtLWFsZXJ0YSl9XG4ucGM0LXN0Lm91dHJve2JhY2tncm91bmQ6dmFyKC0tbmV1dHJvLWYpO2NvbG9yOnZhcigtLW5ldXRybyl9XG4ucGM0LWxpbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7cGFkZGluZzo0cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1saW5oYSl9XG4ucGM0LWxpbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b206MH1cbi5wYzQtdGlsZXtiYWNrZ3JvdW5kOnZhcigtLXBhbGlkbyk7Ym9yZGVyLXJhZGl1czo2cHg7cGFkZGluZzo1cHggN3B4O21pbi13aWR0aDowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweH1cbi5wYzQtdGlsZSAubHtjb2xvcjp2YXIoLS1tdWRvKTtmb250LXNpemU6MTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9XG4ucGM0LXRpbGUgLnZ7Y29sb3I6dmFyKC0tYXp1bCk7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxMnB4O292ZXJmbG93LXdyYXA6YW55d2hlcmV9XG4ucGM0LWVycm97Y29sb3I6dmFyKC0tZXJybyk7Zm9udC1zaXplOjExcHh9XG4ucGM0LWF2aXNve2JhY2tncm91bmQ6dmFyKC0tYWxlcnRhLWYpO2NvbG9yOnZhcigtLWFsZXJ0YSk7Ym9yZGVyLXJhZGl1czo2cHg7cGFkZGluZzo2cHggOXB4O2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjYwMH1cbi5wYzQtbG9naW57bWF4LXdpZHRoOjQ2MHB4O21hcmdpbjoyNHB4IGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHh9XG4ucGM0LXNre2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCNlZWYxZWEgMjUlLCNmN2Y4ZjUgNTAlLCNlZWYxZWEgNzUlKTtiYWNrZ3JvdW5kLXNpemU6MjAwJSAxMDAlO2FuaW1hdGlvbjpwYzRzayAxLjJzIGluZmluaXRlO2JvcmRlci1yYWRpdXM6NnB4fVxuQGtleWZyYW1lcyBwYzRza3tmcm9te2JhY2tncm91bmQtcG9zaXRpb246MjAwJSAwfXRve2JhY2tncm91bmQtcG9zaXRpb246LTIwMCUgMH19XG5gXG5cbi8qKiBJbmpldGEgbyBDU1MgYmFzZSB1bWEgw7puaWNhIHZleiBubyBkb2N1bWVudG8uICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXN0aWxvQmFzZSAoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYzQtZXN0aWxvLWJhc2UnKSkgcmV0dXJuXG4gICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzLmlkID0gJ3BjNC1lc3RpbG8tYmFzZSdcbiAgICBzLnRleHRDb250ZW50ID0gQ1NTX0JBU0VcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpXG4gIH0sIFtdKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9