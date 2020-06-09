import { Column, Entity, Index } from "typeorm";

@Index("tra_trecho_duto_l_pkey", ["idObjeto"], { unique: true })
@Entity("tra_trecho_duto_l", { schema: "bcim" })
export class TraTrechoDutoL {
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

  @Column("integer", { name: "nrdutos", nullable: true })
  nrdutos: number | null;

  @Column("character varying", {
    name: "tipotrechoduto",
    nullable: true,
    length: 22,
  })
  tipotrechoduto: string | null;

  @Column("character varying", {
    name: "mattransp",
    nullable: true,
    length: 12,
  })
  mattransp: string | null;

  @Column("character varying", { name: "setor", nullable: true, length: 21 })
  setor: string | null;

  @Column("character varying", {
    name: "posicaorelativa",
    nullable: true,
    length: 15,
  })
  posicaorelativa: string | null;

  @Column("character varying", {
    name: "matconstr",
    nullable: true,
    length: 18,
  })
  matconstr: string | null;

  @Column("character varying", {
    name: "situacaoespacial",
    nullable: true,
    length: 11,
  })
  situacaoespacial: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

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
