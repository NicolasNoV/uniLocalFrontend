import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaService } from '../../servicios/mapa.service';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';
import { clienteService } from '../../servicios/cliente-service.service';
@Component({
selector: 'app-busqueda',
standalone: true,
imports: [],
templateUrl: './busqueda.component.html',
styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit {
textoBusqueda: string;
resultados: ItemNegocioDTO[];
constructor(private route: ActivatedRoute, private negociosService: clienteService, private mapaService: MapaService) {
this.resultados = [];
this.textoBusqueda = "";
this.route.params.subscribe(params => {
this.textoBusqueda = params['texto'];
this.resultados = this.negociosService.buscarNegocios(this.textoBusqueda);
});
}
ngOnInit(): void {
this.mapaService.crearMapa();
this.mapaService.pintarMarcadores(this.resultados);
}
}