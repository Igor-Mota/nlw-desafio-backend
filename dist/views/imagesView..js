"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(image) {
        return {
            id: image.id,
            url: `http://localhost:3000/uploads/${image.url}`
        };
    },
    renderMany(images) {
        return images.map(image => this.render(image));
    }
};
