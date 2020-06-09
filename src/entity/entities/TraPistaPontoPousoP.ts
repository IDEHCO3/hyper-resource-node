import { Column, Entity, Index } from "typeorm";

@Index("tra_pista_ponto_pouso_p_pkey", ["idObjeto"], { unique: true })
@Entity("tra_pista_ponto_pouso_p", { schema: "bcim" })
export class TraPistaPontoPousoP {
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

  @Column("double precision", {
    name: "largura",
    nullable: true,
    precision: 53,
  })
  largura: number | null;

  @Column("double precision", {
    name: "extensao",
    nullable: true,
    precision: 53,
  })
  extensao: number | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("character varying", {
    name: "homologacao",
    nullable: true,
    length: 12,
  })
  homologacao: string | null;

  @Column("character varying", {
    name: "tipopista",
    nullable: true,
    length: 14,
  })
  tipopista: string | null;

  @Column("character varying", { name: "usopista", nullable: true, length: 15 })
  usopista: string | null;

  @Column("text", { name: "revestimento", nullable: true })
  revestimento: string | null;

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
