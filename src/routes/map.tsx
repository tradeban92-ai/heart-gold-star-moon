import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/app-shell";
import { FaceModel } from "@/components/face-map/face-model";

export const Route = createFileRoute("/map")({ component: MapPage });

function MapPage() {
  return (
    <div>
      <PageHero
        eyebrow="Подбор процедуры"
        title="Карта лица"
        subtitle="Нажмите зону на схеме или номер — откроются процедуры."
      />
      <div className="px-5 py-5">
        <FaceModel />
      </div>
    </div>
  );
}
