import { Column, Entity, Index } from "typeorm";

@Index("rel_curva_nivel_l_pkey", ["idObjeto"], { unique: true })
@Entity("rel_curva_nivel_l", { schema: "bcim" })
export class RelCurvaNivelL {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("integer", { name: "cota", nullable: true })
  cota: number | null;

  @Column("character varying", { name: "depressao", nullable: true, length: 3 })
  depressao: string | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("character varying", { name: "indice", nullable: true, length: 16 })
  indice: string | null;

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
