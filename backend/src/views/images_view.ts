import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.50:3567/uploads/${image.path}`,
      //localhost
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};