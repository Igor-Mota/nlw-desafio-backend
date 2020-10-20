"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.default = {
    renderList(Orphanage) {
        return {
            id: Orphanage.id,
            name: Orphanage.name,
            about: Orphanage.about,
            instructions: Orphanage.instructions,
            opening_hours: Orphanage.opening_hours,
            open_on_weekends: Orphanage.open_on_weekends,
            latitude: Orphanage.latitude,
            longitude: Orphanage.longitude,
        };
    },
    render(Orphanage) {
        return {
            id: Orphanage.result.id,
            name: Orphanage.result.name,
            about: Orphanage.result.about,
            instructions: Orphanage.result.instructions,
            opening_hours: Orphanage.result.opening_hours,
            open_on_weekends: Orphanage.result.open_on_weekends,
            latitude: Orphanage.result.latitude,
            longitude: Orphanage.result.longitude,
            imges: Orphanage.OrphanageImages
        };
    },
    renderMany(OrphanageList) {
        return OrphanageList.map(orpahange => this.renderList(orpahange));
    }
};
