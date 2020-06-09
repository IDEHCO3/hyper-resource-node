import { Column, Entity, Index } from "typeorm";

@Index("tra_trecho_ferroviario_l_pkey", ["idObjeto"], { unique: true })
@Entity("tra_trecho_ferroviario_l", { schema: "bcim" })
export class TraTrechoFerroviarioL {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("character varying", { name: "nome", nullable: true, length: 100 })
  nome: string | null;

  @Column("character varying", {
    name: "nomeabrev",
    nullable: true,
    length: 50,
  })
  nomeabrev: string | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("character varying", {
    name: "codtrechoferrov",
    nullable: true,
    length: 25,
  })
  codtrechoferrov: string | null;

  @Column("character varying", {
    name: "posicaorelativa",
    nullable: true,
    length: 15,
  })
  posicaorelativa: string | null;

  @Column("character varying", {
    name: "tipotrechoferrov",
    nullable: true,
    length: 12,
  })
  tipotrechoferrov: string | null;

  @Column("character varying", { name: "bitola", nullable: true, length: 27 })
  bitola: string | null;

  @Column("character varying", {
    name: "eletrificada",
    nullable: true,
    length: 12,
  })
  eletrificada: string | null;

  @Column("character varying", { name: "nrlinhas", nullable: true, length: 12 })
  nrlinhas: string | null;

  @Column("character varying", {
    name: "emarruamento",
    nullable: true,
    length: 12,
  })
  emarruamento: string | null;

  @Column("text", { name: "jurisdicao", nullable: true })
  jurisdicao: string | null;

  @Column("text", { name: "administracao", nullable: true })
  administracao: string | null;

  @Column("character varying", {
    name: "concessionaria",
    nullable: true,
    length: 100,
  })
  concessionaria: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("double precision", {
    name: "cargasuportmaxima",
    nullable: true,
    precision: 53,
  })
  cargasuportmaxima: number | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;

  @Column("integer", { name: "id_produtor", nullable: true })
  idProdutor: number | null;

  @Column("integer", { name: "id_elementoprodutor", nullable: true })
  idElementoprodutor: number | null;

  @Column("integer", { name: "cd_insumo_orgao", nullable: true })
  cdInsumoOrgao: number | null;

  @Column("smallint", { name: "nr_insumo_mes", nullable: true })
  nrInsumoMes: number | null;

  @Column("smallint", { name: "nr_insumo_ano", nullable: true })
  nrInsumoAno: number | null;

  @Column("character varying", {
    name: "tx_insumo_documento",
    nullable: true,
    length: 60,
  })
  txInsumoDocumento: string | null;
}
