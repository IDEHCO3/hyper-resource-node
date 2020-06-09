import { Column, Entity, Index } from "typeorm";

@Index("tra_ponte_l_pkey", ["idObjeto"], { unique: true })
@Entity("tra_ponte_l", { schema: "bcim" })
export class TraPonteL {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("character varying", { name: "nome", nullable: true, length: 100 })
  nome: string | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("character varying", {
    name: "nomeabrev",
    nullable: true,
    length: 50,
  })
  nomeabrev: string | null;

  @Column("character varying", {
    name: "tipoponte",
    nullable: true,
    length: 12,
  })
  tipoponte: string | null;

  @Column("character varying", { name: "modaluso", nullable: true, length: 15 })
  modaluso: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("character varying", {
    name: "matconstr",
    nullable: true,
    length: 18,
  })
  matconstr: string | null;

  @Column("double precision", {
    name: "vaolivrehoriz",
    nullable: true,
    precision: 53,
  })
  vaolivrehoriz: number | null;

  @Column("double precision", {
    name: "vaovertical",
    nullable: true,
    precision: 53,
  })
  vaovertical: number | null;

  @Column("double precision", {
    name: "cargasuportmaxima",
    nullable: true,
    precision: 53,
  })
  cargasuportmaxima: number | null;

  @Column("integer", { name: "nrpistas", nullable: true })
  nrpistas: number | null;

  @Column("integer", { name: "nrfaixas", nullable: true })
  nrfaixas: number | null;

  @Column("double precision", {
    name: "extensao",
    nullable: true,
    precision: 53,
  })
  extensao: number | null;

  @Column("double precision", {
    name: "largura",
    nullable: true,
    precision: 53,
  })
  largura: number | null;

  @Column("character varying", {
    name: "posicaopista",
    nullable: true,
    length: 13,
  })
  posicaopista: string | null;

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
