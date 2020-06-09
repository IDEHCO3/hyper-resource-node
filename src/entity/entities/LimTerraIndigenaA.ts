import { Column, Entity, Index } from "typeorm";

@Index("lim_terra_indigena_a_pkey", ["idObjeto"], { unique: true })
@Entity("lim_terra_indigena_a", { schema: "bcim" })
export class LimTerraIndigenaA {
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
    name: "perimetrooficial",
    nullable: true,
    precision: 53,
  })
  perimetrooficial: number | null;

  @Column("double precision", {
    name: "areaoficialha",
    nullable: true,
    precision: 53,
  })
  areaoficialha: number | null;

  @Column("character varying", {
    name: "grupoetnico",
    nullable: true,
    length: 100,
  })
  grupoetnico: string | null;

  @Column("character varying", {
    name: "datasituacaojuridica",
    nullable: true,
    length: 20,
  })
  datasituacaojuridica: string | null;

  @Column("character varying", {
    name: "situacaojuridica",
    nullable: true,
    length: 23,
  })
  situacaojuridica: string | null;

  @Column("character varying", { name: "nometi", nullable: true, length: 100 })
  nometi: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;

  @Column("integer", { name: "id_produtor", nullable: true })
  idProdutor: number | null;

  @Column("integer", { name: "id_elementoprodutor", nullable: true })
  idElementoprodutor: number | null;

  @Column("integer", { name: "codigofunai", nullable: true })
  codigofunai: number | null;

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
