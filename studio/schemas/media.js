import { MdCollections } from "react-icons/md";

export default {
  title: "Gallery Media",
  name: 'galleryMediaedia',
  type: 'document',
  icon: MdCollections,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Gallery Image',
      name: 'galleryImage',
      type: 'img',
    },
  ]
};