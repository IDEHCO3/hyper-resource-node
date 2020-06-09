import { Column, Entity, Index } from "typeorm";

@Index("hid_trecho_drenagem_l_pkey", ["idObjeto"], { unique: true })
@Entity("hid_trecho_drenagem_l", { schema: "bcim" })
export class HidTrechoDrenagemL {
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
    name: "dentrodepoligono",
    nullable: true,
    length: 3,
  })
  dentrodepoligono: string | null;

  @Column("character varying", {
    name: "compartilhado",
    nullable: true,
    length: 3,
  })
  compartilhado: string | null;

  @Column("character varying", {
    name: "eixoprincipal",
    nullable: true,
    length: 3,
  })
  eixoprincipal: string | null;

  @Column("double precision", {
    name: "caladomax",
    nullable: true,
    precision: 53,
  })
  caladomax: number | null;

  @Column("double precision", {
    name: "larguramedia",
    nullable: true,
    precision: 53,
  })
  larguramedia: number | null;

  @Column("double precision", {
    name: "velocidademedcorrente",
    nullable: true,
    precision: 53,
  })
  velocidademedcorrente: number | null;

  @Column("double precision", {
    name: "profundidademedia",
    nullable: true,
    precision: 53,
  })
  profundidademedia: number | null;

  @Column("character varying", {
    name: "coincidecomdentrode",
    nullable: true,
    length: 35,
  })
  coincidecomdentrode: string | null;

  @Column("character varying", {
    name: "navegabilidade",
    nullable: true,
    length: 16,
  })
  navegabilidade: string | null;

  @Column("character varying", { name: "regime", nullable: true, length: 31 })
  regime: string | null;

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
