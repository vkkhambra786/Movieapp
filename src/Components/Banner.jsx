import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card banner-card">
          <img
            src="https://media.gettyimages.com/illustrations/triceratops-and-volcanic-landscape-illustration-id478183883?k=20&m=478183883&s=612x612&w=0&h=yIaNnAIWgt_Pe_pPzbr9FPn-A4gWkv3VMzsMutkLKV4="
            className="card-img-top banner-img"
            alt="..."
          />

          <h5 className="card-title banner-title">Jurassic Hunt</h5>
          <p className="card-text banner-text">
            Jurassic Park is a 1993 American science fiction action film[3]
            directed by Steven Spielberg and produced by Kathleen Kennedy and
            Gerald R. Molen. It is the first installment in the Jurassic Park
            franchise, and the first film in the Jurassic Park original trilogy,
            and is based on the 1990 novel of the same name by Michael Crichton
            and a screenplay written by Crichton and David Koepp. The film is
            set on the fictional island of Isla Nublar, located off Central
            America's Pacific Coast near Costa Rica. There, wealthy businessman
            John Hammond and a team of genetic scientists have created a
            wildlife park of de-extinct dinosaurs. When industrial sabotage
            leads to a catastrophic shutdown of the park's power facilities and
            security precautions, a small group of visitors and Hammond's
            grandchildren struggle to survive and escape the perilous island.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
