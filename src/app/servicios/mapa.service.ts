import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var mapboxgl: any;

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  mapa: any;
  style: string = 'mapbox://styles/mapbox/streets-v11';
  marcadores: any[] = [];

  constructor(private http: HttpClient) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xhc25vdiIsImEiOiJjbHdsZXVreGswZ2FsMmtwaDR0OXRzMGYzIn0.MO4i4V_T5JOOT-M5Vi-lQA';
  }

  public crearMapa() {
    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: this.style,
      center: [-72.309, 4.473],
      zoom: 4.5
    });

    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
      })
    );
  }

  public agregarMarcador(): Observable<any> {
    const mapaGlobal = this.mapa;
    const marcadores = this.marcadores;

    return new Observable<any>(observer => {
      mapaGlobal.on('click', function (e: any) {
        marcadores.forEach(marcador => marcador.remove());

        const marcador = new mapboxgl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(mapaGlobal);

        marcadores.push(marcador);
        observer.next(marcador._lngLat);
      });
    });
  }

  public pintarMarcadores(negocios: any[]) {
    negocios.forEach(negocio => {
      new mapboxgl.Marker()
        .setLngLat([negocio.longitud, negocio.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(negocio.nombre))
        .addTo(this.mapa);
    });
  }

  public obtenerNegocios(nombrePropietario: string): Observable<any> {
    return this.http.get(`/api/moderador/listar-negocios-propietario/${nombrePropietario}`);
  }
}
