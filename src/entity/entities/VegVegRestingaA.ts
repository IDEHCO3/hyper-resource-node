import { Column, Entity, Index } from "typeorm";

@Index("veg_veg_restinga_a_pkey", ["idObjeto"], { unique: true })
@Entity("veg_veg_restinga_a", { schema: "bcim" })
export class VegVegRestingaA {
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

  @Column("double precision", {
    name: "alturamediaindividuos",
    nullable: true,
    precision: 53,
  })
  alturamediaindividuos: number | null;

  @Column("character varying", {
    name: "classificacaoporte",
    nullable: true,
    length: 12,
  })
  classificacaoporte: string | null;

  @Column("character varying", { name: "denso", nullable: true, length: 12 })
  denso: string | null;

  @Column("character varying", {
    name: "antropizada",
    nullable: true,
    length: 23,
  })
  antropizada: string | null;

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
