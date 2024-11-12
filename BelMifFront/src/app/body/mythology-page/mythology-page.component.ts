import { Component } from '@angular/core';
import { MythologyCardComponent } from "../mythology-card/mythology-card.component";
import { MythologyModel } from '../../models/mythologyModel';

@Component({
  selector: 'app-mythology-page',
  standalone: true,
  imports: [MythologyCardComponent],
  templateUrl: './mythology-page.component.html',
  styleUrl: './mythology-page.component.scss'
})

export class MythologyPageComponent {
  readonly cardsList: MythologyModel[] = [
    {
        name: "Перун",
        photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Perun.jpg",
        description: "Главным богом у древних белорусов был Перун. Именно он стрельнул молнией в камень - и появилась земля, растения, животные и люди."
    },
    {
      name: "Мара",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Mara.png",
      description: "Светлому началу противостояло темное - богиня Мара. Ее называли богиней смерти и рождения, она как будто стояла на границе двух миров, принимала младенцев и провожала умерших в вечное путешествие."
    },
    {
      name: "Велес",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Veles.jpg",
      description: "Еще один важный бог для белорусов - Велес. Он “отвечал” за скот, охоту и вообще за богатство. Велес был покровителем сказителей - их можно сравнить с современными бродячими артистами, которые ходили по селам и рассказывали былины."
    },
    {
      name: "Лёля",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Lelia.jpg",
      description: "Богиню весны и любви звали Лёля. Молодую богиню иногда называли дочерью Лады (также богиня любви и брака), у нее был свой праздник - лельник. В конце апреля незамужние девушки плели венки, водили хороводы и гадали на суженого."
    },
    {
      name: "Зюзя",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Zuzia.jpg",
      description: "Зюзя - так звали бога мороза и холода. Его представляли древним старичком, который ходит босиком и своим ледяным дыханием замораживает реки и дома."
    },
    {
      name: "Жижель",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Zhizhel.jpg",
      description: "У огня, чью силу и мощь ценили древние белорусы, был свой бог - Жижель (Жижаль). Наши предки верили, что именно Жижель принес людям огонь, и его дар необходимо беречь."
    },
    {
      name: "Цмок",
      photo: "https://probelarus.by/images/blog/2020/Mify_o_Belarusi/Cmok.jpg",
      description: "В белорусской мифологии это был Цмок - грозный, но мудрый змей."
    }
  ]
}
