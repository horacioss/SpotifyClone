import axios from "axios";

const TOKEN = "BQA0vZUmLxQTq6ICNvULTDgclgZwOcwMrsTIQMbjtyCAvsLdF5s3BRa9aS8keoVtNbNQiwqWw9yd0oCDLYcnNRhM0S1bcv_n2b7I0mvQTDSoPyfDqqoPs9kKIpDffjE1Bvs95aNRXePQjy5Q_wm6gxzJzemGeUixT";
const baseUrl = "https://api.spotify.com/v1";
const featuredPlayLists = `${baseUrl}/browse/featured-playlists`

const config = {
  headers: {
    "Content-Type": "aplication-json",
    "Authorizathion": `Bearer ${TOKEN}`,
  }
}

export const getGenreList = async () => {
  try {

    const data = await axios.get(featuredPlayLists, config)

    const genre = data["playlists"]["items"].map((item: any) => ({
      id: item["id"],
      name: item["name"],
      picture: item["images"][0]["url"]
    }))

    console.log(genre[1]);

    return genre;
  } catch (err) {
    console.error(err.message)
  }
};
