import { Column, Entity, Index } from "typeorm";

@Index("lim_outros_limites_oficiais_l_pkey", ["idObjeto"], { unique: true })
@Entity("lim_outros_limites_oficiais_l", { schema: "bcim" })
export class LimOutrosLimitesOficiaisL {
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
    name: "coincidecomdentrode",
    nullable: true,
    length: 50,
  })
  coincidecomdentrode: string | null;

  @Column("double precision", {
    name: "extensao",
    nullable: true,
    precision: 53,
  })
  extensao: number | null;

  @Column("character varying", {
    name: "obssituacao",
    nullable: true,
    length: 100,
  })
  obssituacao: string | null;

  @Column("character varying", {
    name: "tipooutlimofic",
    nullable: true,
    length: 50,
  })
  tipooutlimofic: string | null;

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
