const db = require("../models");
const ParkContent = db.ParkContent;

exports.createPark = async (req, res) => {
  try {
    const { parkName, sections } = req.body;

    const structured = {
      meta1: [
        {
          title: "Overview",
          subTitle: "",
          description: sections.overview.description,
          images: sections.overview.images,
          points: sections.overview.points,
          park_queste: "Overview quest",
        },
        {
          title: "Park Highlights",
          subTitle: "",
          description: sections.park_highlights.description,
          images: sections.park_highlights.images,
          points: sections.park_highlights.points,
          park_queste: "Park highlights quest",
        },
        {
          title: "Introduction",
          subTitle: "",
          description: sections.introduction.description,
          images: [],
          points: [],
          park_queste: "Introduction quest",
        },
      ],
      meta2: [
        {
          title: "Wildlife Highlights",
          subTitle: "",
          description: sections.wildlife_highlight.description,
          images: sections.wildlife_highlight.images,
          points: sections.wildlife_highlight.points,
          park_queste: "Wildlife highlights quest",
        },
        {
          title: "Geographical Highlights",
          subTitle: "",
          description: sections.geographical_highlight.description,
          images: sections.geographical_highlight.images,
          points: sections.geographical_highlight.points,
          park_queste: "Geographical highlights quest",
        },
      ],
      meta3: [
        {
          title: "Heading",
          subTitle: "",
          description: sections.heading.description,
          images: [],
          points: [],
          park_queste: "Heading quest",
        },
      ],
      meta4: [
        {
          title: "Quotes",
          subTitle: "",
          description: sections.quotes.description,
          images: sections.quotes.images,
          points: sections.quotes.points,
          park_queste: "Quotes quest",
        },
      ],
    };

    const park = await ParkContent.create({
      parkName,
      content: structured,
    });

    res.status(201).json(park);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create park content" });
  }
};


exports.getParkById = async (req, res) => {
  try {
    const id = req.params.id;
    const park = await ParkContent.findByPk(id); // Sequelize model

    if (!park) {
      return res.status(404).json({ error: "Park not found" });
    }

    res.status(200).json(park);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch park content" });
  }
};