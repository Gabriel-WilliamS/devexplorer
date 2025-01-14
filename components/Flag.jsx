export default function Flag({ state, country, ...rest }) {
  const arrayStates = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SP',
    'TO',
  ];

  const countriesList = {
    'Africa do Sul': 'za.svg',
    Albânia: 'al.svg',
    Alemanha: 'de.svg',
    Andorra: 'ad.svg',
    Angola: 'ao.svg',
    Anguilla: 'ai.svg',
    Antartica: 'aq.svg',
    'Antígua e Barbuda': 'ag.svg',
    'Antilhas Holandesas': 'an.svg',
    'Arábia Saudita': 'sa.svg',
    Argélia: 'dz.svg',
    Argentina: 'ar.svg',
    Armênia: 'am.svg',
    Aruba: 'aw.svg',
    Austrália: 'au.svg',
    Áustria: 'at.svg',
    Azerbaidjão: 'az.svg',
    Bahamas: 'bs.svg',
    Bangladesh: 'bd.svg',
    Barbados: 'bb.svg',
    Bareine: 'bh.svg',
    Belarus: 'by.svg',
    Bélgica: 'be.svg',
    Belize: 'bz.svg',
    Benelux: 'bx.svg',
    Benin: 'bj.svg',
    Bermudas: 'bm.svg',
    Bolívia: 'bo.svg',
    'Bósnia e Herzegóvina': 'ba.svg',
    Botswana: 'bw.svg',
    Brasil: 'br.svg',
    Bulgária: 'bg.svg',
    'Brunei Darussalam': 'bn.svg',
    'Burkina Faso': 'bf.svg',
    Burundi: 'bi.svg',
    Butão: 'bt.svg',
    'Cabo Verde': 'cv.svg',
    Camarões: 'cm.svg',
    Camboja: 'kh.svg',
    Canadá: 'ca.svg',
    Catar: 'qa.svg',
    Cazaquistão: 'kz.svg',
    Chade: 'td.svg',
    'Guiné Bissau': 'gw.svg',
    'Guine Equatorial': 'gq.svg',
    Haiti: 'ht.svg',
    Holanda: 'nl.svg',
    Honduras: 'hn.svg',
    'Hong-Kong': 'hk.svg',
    Hungria: 'hu.svg',
    Iêmen: 'ye.svg',
    'Ilha Bouvet': 'bv.svg',
    'Ilha do Homem': 'im.svg',
    'Ilha Natal': 'cx.svg',
    'Ilha Norfalk': 'nf.svg',
    'Ilhas Cayman': 'ky.svg',
    'Ilhas Cocos': 'cc.svg',
    'Ilhas Cook': 'ck.svg',
    'Ilhas do Canal': 'gg.svg',
    'Ilhas Faroe': 'fo.svg',
    'Ilhas Heard e McDonald': 'hm.svg',
    'Ilhas Malvinas': 'fk.svg',
    'Ilhas Marianas do Norte': 'mp.svg',
    'Ilhas Marshall': 'mh.svg',
    'Ilhas Menores': 'um.svg',
    'Ilhas Salomão': 'sb.svg',
    'Ilhas Turks e Caicos': 'tc.svg',
    'Ilhas Virgens (Britânicas)': 'vg.svg',
    'Ilhas Virgens (U.S.)': 'vi.svg',
    'Ilhas Wallis e Futura': 'wf.svg',
    India: 'in.svg',
    Indonésia: 'id.svg',
    Irã: 'ir.svg',
    Iraque: 'iq.svg',
    Irlanda: 'ie.svg',
    Islândia: 'is.svg',
    Israel: 'il.svg',
    Itália: 'it.svg',
    Jamaica: 'jm.svg',
    Japão: 'jp.svg',
    Jersey: 'je.svg',
    Palau: 'pw.svg',
    Panamá: 'pa.svg',
    'Papua Nova Guiné': 'pg.svg',
    Paquistão: 'pk.svg',
    Paraguai: 'py.svg',
    Peru: 'pe.svg',
    Pitcairn: 'pn.svg',
    'Polinésia Francesa': 'pf.svg',
    Polônia: 'pl.svg',
    'Porto Rico': 'pr.svg',
    Portugal: 'pt.svg',
    Quênia: 'ke.svg',
    Quirguistão: 'kg.svg',
    'Reino Unido': 'gb.svg',
    'República Centro Africana': 'cf.svg',
    'República da Coréia': 'kr.svg',
    'República da Macedonia': 'mk.svg',
    'República da Moldova': 'md.svg',
    'República Dem. Do Congo': 'cd.svg',
    'República Dominicana': 'do.svg',
    'República Pop. Dem. da Coreia': 'kp.svg',
    'República Tcheca': 'cz.svg',
    'República Unida da Tanzânia': 'tz.svg',
    Reunião: 're.svg',
    Romênia: 'ro.svg',
    Ruanda: 'rw.svg',
    'Saara Ocidental': 'eh.svg',
    'Saint Pierre e Miquelon': 'pm.svg',
    'Samoa Americana': 'as.svg',
    'Samoa Ocidental': 'ws.svg',
    'Santa Helena': 'sh.svg',
    'Santa Lúcia': 'lc.svg',
    'São Marino': 'sm.svg',
    'São Vicente e Granadinas': 'vc.svg',
    'Serra Leoa': 'sl.svg',
    Seychelles: 'sc.svg',
    Síria: 'sy.svg',
    'Sri Lanka': 'lk.svg',
    Sudão: 'sd.svg',
    Chile: 'cl.svg',
    China: 'cn.svg',
    Chipre: 'cy.svg',
    Colômbia: 'co.svg',
    Comores: 'km.svg',
    Congo: 'cg.svg',
    'Costa do Marfim': 'ci.svg',
    'Costa Rica': 'cr.svg',
    Croácia: 'hr.svg',
    Cuba: 'cu.svg',
    Dinamarca: 'dk.svg',
    Djibuti: 'dj.svg',
    Dominica: 'dm.svg',
    Egito: 'eg.svg',
    'El Salvador': 'sv.svg',
    'Emirados Árabes Unidos': 'ae.svg',
    Equador: 'ec.svg',
    Eritréia: 'er.svg',
    'Escritório para Harmonização no Mercado Interno': 'em.svg',
    Eslováquia: 'sk.svg',
    Eslovenia: 'si.svg',
    Espanha: 'es.svg',
    'Estados Unidos': 'us.svg',
    Estônia: 'ee.svg',
    Etiópia: 'et.svg',
    'Federação Russa': 'ru.svg',
    Fiji: 'fj.svg',
    Filipinas: 'ph.svg',
    Finlândia: 'fi.svg',
    França: 'fr.svg',
    Gabão: 'ga.svg',
    Gambia: 'gm.svg',
    Geórgia: 'ge.svg',
    Gana: 'gh.svg',
    'Geórgia do Sul e Ilhas Sandwich do Sul': 'gs.svg',
    Gibraltar: 'gi.svg',
    Granada: 'gd.svg',
    Grécia: 'gr.svg',
    Groenlândia: 'gl.svg',
    Guadalupe: 'gp.svg',
    Guam: 'gu.svg',
    Guatemala: 'gt.svg',
    Guiana: 'gy.svg',
    Guine: 'gn.svg',
    Jordânia: 'jo.svg',
    Kiribati: 'ki.svg',
    Kuwait: 'kw.svg',
    Laos: 'la.svg',
    Lesoto: 'ls.svg',
    Letônia: 'lv.svg',
    Líbano: 'lb.svg',
    Libéria: 'lr.svg',
    Líbia: 'ly.svg',
    Liechtenstein: 'li.svg',
    Lituânia: 'lt.svg',
    Luxemburgo: 'lu.svg',
    Macau: 'mo.svg',
    Madagascar: 'mg.svg',
    Malásia: 'my.svg',
    Malawi: 'mw.svg',
    Maldivas: 'mv.svg',
    Mali: 'ml.svg',
    Malta: 'mt.svg',
    Marrocos: 'ma.svg',
    Martinica: 'mq.svg',
    Maurício: 'mu.svg',
    Mauritânia: 'mr.svg',
    México: 'mx.svg',
    Mianmá: 'mm.svg',
    Micronésia: 'fm.svg',
    Moçambique: 'mz.svg',
    Mônaco: 'mc.svg',
    Mongólia: 'mn.svg',
    'Mont Serrat': 'ms.svg',
    Montenegro: 'me.svg',
    Namíbia: 'na.svg',
    Nauru: 'nr.svg',
    Nepal: 'np.svg',
    Nicarágua: 'ni.svg',
    Níger: 'ne.svg',
    Nigéria: 'ng.svg',
    Noruega: 'no.svg',
    'Nova Caledônia': 'nc.svg',
    'Nova Zelândia': 'nz.svg',
    Omã: 'om.svg',
    'Organização Africana de Propriedade Intelectual (OAPI)': 'oa.svg',
    'Organização Mundial de Propriedade Intelectual – OMPI (WIPO)': 'wo.svg',
    'Organização Regional de Propriedade Industrial Africana': 'ap.svg',
    Suécia: 'se.svg',
    Suíça: 'ch.svg',
    Suriname: 'sr.svg',
    'Svalbard e Jan Mayen': 'sj.svg',
    Tadjiquistão: 'tj.svg',
    Tailândia: 'th.svg',
    Taiwan: 'tw.svg',
    'Terras Austrais Francesas': 'tf.svg',
    'Territ.Britan.Oceano Índico': 'io.svg',
    'Território Ocupado Palestino': 'ps.svg',
    'Timor-Leste': 'tl.svg',
    Togo: 'tg.svg',
    Tokelau: 'tk.svg',
    Tonga: 'to.svg',
    'Trinidad e Tobago': 'tt.svg',
    Tunísia: 'tn.svg',
    Turcomenistão: 'tm.svg',
    Turquia: 'tr.svg',
    Tuvalu: 'tv.svg',
    Ucrânia: 'ua.svg',
    Uganda: 'ug.svg',
    Uruguai: 'uy.svg',
    Uzbequistão: 'uz.svg',
    Vanuatu: 'vu.svg',
    Vaticano: 'va.svg',
    Venezuela: 've.svg',
    Vietnã: 'vn.svg',
    Yugoslávia: 'yu.svg',
    Zaire: 'zr.svg',
    Zâmbia: 'zm.svg',
    Zimbábue: 'zw.svg',
    'São Cristovão e Nevis': 'kn.svg',
    'São Tomé e Príncipe': 'st.svg',
    Senegal: 'sn.svg',
    Sérvia: 'rs.svg',
    Singapura: 'sg.svg',
    Somália: 'so.svg',
    Suazilândi: 'sz.svg',
  };
  const isBrazil = arrayStates.includes(state);

  return (
    <div>
      {isBrazil ? (
        <img src={`images/flags/${state}.svg`} width="32px" {...rest} alt={state} />
      ) : (
        <img
          src={`images/flags/countries/${countriesList[country]}`}
          width="32px"
          {...rest}
          alt={country}
        />
      )}
    </div>
  );
}
