// extern crate curl;
extern crate rss;
extern crate hyper;

// use curl::http;
use rss::Rss;
use std::io::prelude::*;

#[derive(Debug)]
pub struct Post  {
    title: String,
    link: String,
    description: String,
}

fn main() {
    let user = "realtin".to_string();
    let vec = get_soup(&user);
    println!("{:?}", vec[vec.len()-1]);
}

fn get_soup(user: &str) ->Vec<Post>{
    let url = format!("http://{}.soup.io/rss", user);
    let mut vec = Vec::new();

    let client = hyper::Client::new();
    let mut response = client.get(&url).send().unwrap();

    let mut suppe = String::new();
    //füllt suppe mit string
    let _= response.read_to_string(&mut suppe);

    let rss::Rss(channel) = suppe.parse::<rss::Rss>().unwrap();

    // println!("{:?}", rss);

    for item in channel.items.into_iter().rev() {
      let item_object = Post {
           title: item.title.unwrap(),
           link: item.link.unwrap(),
           description: item.description.unwrap(),
        };
        vec.push(item_object);
    //   println!("{:?}", description);
    }
    // println!("{:?}", &vec);
    return vec;
}
