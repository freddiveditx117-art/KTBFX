import React, { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

type Lang = "es" | "en";
type Tab = "home" | "library" | "coach" | "progress";

const copy = {
  es: {
    tagline:"KETTLEBELL TRAINING EXPERIENCE", welcome:"ENTRENA. APRENDE. EVOLUCIONA.",
    intro:"Tu entrenador de kettlebell, paso a paso.", start:"CREAR ENTRENAMIENTO",
    library:"Ejercicios", coach:"Entrenador", progress:"Progreso", home:"Inicio",
    levels:["Principiante","Intermedio","Avanzado"], goal:"Objetivo", level:"Nivel",
    duration:"Duración", strength:"Fuerza general", endurance:"Resistencia física",
    technique:"Movilidad y técnica", generate:"GENERAR MI RUTINA", plan:"Tu rutina",
    warmup:"Calentamiento suave y movilidad", goblet:"Sentadilla goblet",
    deadlift:"Peso muerto con kettlebell", cooldown:"Vuelta a la calma",
    login:"PRÓXIMAMENTE: INICIAR SESIÓN", google:"Continuar con Google",
    apple:"Continuar con Apple", authNote:"El inicio de sesión se conectará al configurar las credenciales de Google, Apple y Supabase.",
    empty:"Tus sesiones completadas aparecerán aquí.", language:"Idioma",
    safety:"Prioriza la técnica. Detente si sientes dolor y solicita orientación cualificada para aprender movimientos nuevos."
  },
  en: {
    tagline:"KETTLEBELL TRAINING EXPERIENCE", welcome:"TRAIN. LEARN. EVOLVE.",
    intro:"Your step-by-step kettlebell coach.", start:"BUILD A WORKOUT",
    library:"Exercises", coach:"Coach", progress:"Progress", home:"Home",
    levels:["Beginner","Intermediate","Advanced"], goal:"Goal", level:"Level",
    duration:"Duration", strength:"General strength", endurance:"Physical endurance",
    technique:"Mobility & technique", generate:"GENERATE MY WORKOUT", plan:"Your workout",
    warmup:"Gentle warm-up and mobility", goblet:"Goblet squat",
    deadlift:"Kettlebell deadlift", cooldown:"Cool-down",
    login:"COMING SOON: SIGN IN", google:"Continue with Google",
    apple:"Continue with Apple", authNote:"Sign-in will be connected after Google, Apple and Supabase credentials are configured.",
    empty:"Your completed sessions will appear here.", language:"Language",
    safety:"Prioritize technique. Stop if you feel pain and seek qualified guidance when learning new movements."
  }
};

const moves = [
  { es:"Sentadilla goblet", en:"Goblet squat", detailEs:"Practica una sentadilla controlada sosteniendo la kettlebell cerca del pecho.", detailEn:"Practice a controlled squat while holding the kettlebell close to your chest." },
  { es:"Peso muerto", en:"Kettlebell deadlift", detailEs:"Aprende a flexionar la cadera manteniendo una postura estable.", detailEn:"Learn to hinge at the hips while maintaining a stable posture." },
  { es:"Swing (solo con técnica aprendida)", en:"Swing (after learning the technique)", detailEs:"Movimiento dinámico que requiere instrucción y dominio de la bisagra de cadera.", detailEn:"A dynamic movement that requires instruction and a mastered hip hinge." }
];

export default function App() {
  const [lang,setLang] = useState<Lang>("es");
  const [tab,setTab] = useState<Tab>("home");
  const [level,setLevel] = useState("Principiante");
  const [goal,setGoal] = useState("Fuerza general");
  const [duration,setDuration] = useState("20 min");
  const [generated,setGenerated] = useState(false);
  const [selected,setSelected] = useState(0);
  const t = copy[lang];
  const levelOptions = lang === "es" ? ["Principiante","Intermedio","Avanzado"] : ["Beginner","Intermediate","Advanced"];
  const goalOptions = [t.strength,t.endurance,t.technique];
  const durationOptions = ["10 min","20 min","30 min"];

  const plan = useMemo(() => {
    if (levelOptions[0] === level) return [t.warmup, `${t.goblet}: 2 × 8`, `${t.deadlift}: 2 × 8`, t.cooldown];
    if (levelOptions[1] === level) return [t.warmup, `${t.goblet}: 3 × 8`, `${t.deadlift}: 3 × 8`, t.cooldown];
    return [t.warmup, `${t.goblet}: 3 × 8`, `${t.deadlift}: 3 × 8`, t.cooldown];
  }, [level, lang]);

  const nav = [
    ["home",t.home],["library",t.library],["coach",t.coach],["progress",t.progress]
  ] as [Tab,string][];

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar style="light" />
      <View style={s.header}>
        <View><Text style={s.logo}>KTBFX</Text><Text style={s.tagline}>{t.tagline}</Text></View>
        <Pressable style={s.lang} onPress={()=>setLang(lang==="es"?"en":"es")}><Text style={s.langText}>{lang.toUpperCase()}  ⇄</Text></Pressable>
      </View>
      <ScrollView contentContainerStyle={s.content}>
        {tab==="home" && <>
          <Text style={s.eyebrow}>KETTLEBELL FITNESS</Text>
          <Text style={s.hero}>{t.welcome}</Text>
          <Text style={s.muted}>{t.intro}</Text>
          <View style={s.heroPanel}><Text style={s.heroIcon}>🏋️</Text><Text style={s.panelTitle}>KTBFX</Text><Text style={s.muted}>MOVE WITH PURPOSE</Text></View>
          <Pressable style={s.primary} onPress={()=>setTab("coach")}><Text style={s.primaryText}>{t.start}</Text></Pressable>
          <View style={s.row}>
            <Pressable style={s.tile} onPress={()=>setTab("library")}><Text style={s.tileIcon}>▤</Text><Text style={s.tileTitle}>{t.library}</Text></Pressable>
            <Pressable style={s.tile} onPress={()=>setTab("progress")}><Text style={s.tileIcon}>▥</Text><Text style={s.tileTitle}>{t.progress}</Text></Pressable>
          </View>
          <Text style={s.section}>{t.login}</Text>
          <Pressable style={s.authButton} onPress={()=>{}}><Text style={s.authText}>G  {t.google}</Text></Pressable>
          <Pressable style={s.authButton} onPress={()=>{}}><Text style={s.authText}>●  {t.apple}</Text></Pressable>
          <Text style={s.small}>{t.authNote}</Text>
        </>}
        {tab==="library" && <>
          <Text style={s.hero}>{t.library}</Text>
          {moves.map((m,i)=><Pressable key={m.en} onPress={()=>setSelected(i)} style={[s.moveCard,selected===i&&s.selected]}>
            <Text style={s.moveTitle}>{lang==="es"?m.es:m.en}</Text>
            <Text style={s.muted}>{lang==="es"?m.detailEs:m.detailEn}</Text>
            {selected===i&&<Text style={s.redText}>● {lang==="es"?"Seleccionado":"Selected"}</Text>}
          </Pressable>)}
          <Text style={s.small}>{t.safety}</Text>
        </>}
        {tab==="coach" && <>
          <Text style={s.hero}>{t.coach}</Text>
          <Text style={s.label}>{t.level}</Text>
          <View style={s.row}>{levelOptions.map(v=><Pressable key={v} onPress={()=>{setLevel(v);setGenerated(false)}} style={[s.option,level===v&&s.optionActive]}><Text style={s.optionText}>{v}</Text></Pressable>)}</View>
          <Text style={s.label}>{t.goal}</Text>
          {goalOptions.map(v=><Pressable key={v} onPress={()=>{setGoal(v);setGenerated(false)}} style={[s.choice,goal===v&&s.choiceActive]}><Text style={s.choiceText}>{v}</Text></Pressable>)}
          <Text style={s.label}>{t.duration}</Text>
          <View style={s.row}>{durationOptions.map(v=><Pressable key={v} onPress={()=>{setDuration(v);setGenerated(false)}} style={[s.option,duration===v&&s.optionActive]}><Text style={s.optionText}>{v}</Text></Pressable>)}</View>
          <Pressable style={s.primary} onPress={()=>setGenerated(true)}><Text style={s.primaryText}>{t.generate}</Text></Pressable>
          {generated&&<View style={s.result}><Text style={s.panelTitle}>{t.plan}</Text><Text style={s.muted}>{level} · {goal} · {duration}</Text>{plan.map((p,i)=><Text key={i} style={s.planLine}>{i+1}. {p}</Text>)}<Text style={s.small}>{t.safety}</Text></View>}
        </>}
        {tab==="progress" && <>
          <Text style={s.hero}>{t.progress}</Text>
          <View style={s.result}><Text style={s.panelTitle}>0</Text><Text style={s.muted}>{t.empty}</Text></View>
        </>}
      </ScrollView>
      <View style={s.nav}>{nav.map(([id,label])=><Pressable key={id} onPress={()=>setTab(id)} style={s.navItem}><Text style={[s.navText,tab===id&&s.navActive]}>{label}</Text></Pressable>)}</View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:"#101010"}, header:{paddingHorizontal:20,paddingTop:12,paddingBottom:14,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomWidth:1,borderColor:"#292929"},
  logo:{color:"#fff",fontSize:30,fontWeight:"900",letterSpacing:2},tagline:{color:"#aaa",fontSize:9,letterSpacing:1.5},lang:{backgroundColor:"#292929",padding:10,borderRadius:8},langText:{color:"#fff",fontWeight:"700"},
  content:{padding:20,paddingBottom:35},eyebrow:{color:"#e3262e",fontWeight:"800",letterSpacing:2,marginTop:8},hero:{color:"#fff",fontSize:29,fontWeight:"900",marginTop:8,marginBottom:10},muted:{color:"#aaa",fontSize:14,lineHeight:21},
  heroPanel:{backgroundColor:"#242424",borderRadius:16,marginVertical:22,padding:24,alignItems:"center",borderWidth:1,borderColor:"#3b3b3b"},heroIcon:{fontSize:54},panelTitle:{color:"#fff",fontSize:22,fontWeight:"900",marginVertical:8},
  primary:{backgroundColor:"#d71920",padding:17,borderRadius:10,alignItems:"center",marginVertical:12},primaryText:{color:"#fff",fontWeight:"900",letterSpacing:1},
  row:{flexDirection:"row",gap:9,marginVertical:8},tile:{flex:1,backgroundColor:"#242424",padding:18,borderRadius:12},tileIcon:{color:"#e3262e",fontSize:25},tileTitle:{color:"#fff",fontWeight:"800",marginTop:8},
  section:{color:"#fff",fontWeight:"800",marginTop:20,marginBottom:8},authButton:{borderWidth:1,borderColor:"#555",borderRadius:9,padding:14,marginVertical:5,alignItems:"center"},authText:{color:"#fff",fontWeight:"700"},small:{color:"#888",fontSize:11,lineHeight:17,marginTop:12},
  moveCard:{backgroundColor:"#242424",padding:16,borderRadius:12,marginVertical:7,borderWidth:1,borderColor:"#333"},selected:{borderColor:"#d71920"},moveTitle:{color:"#fff",fontWeight:"800",fontSize:17,marginBottom:6},redText:{color:"#e3262e",fontSize:12,marginTop:8},
  label:{color:"#fff",fontWeight:"800",marginTop:18,marginBottom:8},option:{flex:1,padding:11,backgroundColor:"#292929",borderRadius:8,alignItems:"center"},optionActive:{backgroundColor:"#d71920"},optionText:{color:"#fff",fontSize:12,fontWeight:"700"},
  choice:{padding:14,backgroundColor:"#242424",borderRadius:9,marginVertical:4,borderWidth:1,borderColor:"#333"},choiceActive:{borderColor:"#d71920"},choiceText:{color:"#fff"},result:{backgroundColor:"#242424",padding:17,borderRadius:12,marginTop:15},planLine:{color:"#fff",marginTop:12,lineHeight:20},
  nav:{flexDirection:"row",justifyContent:"space-around",paddingVertical:13,borderTopWidth:1,borderColor:"#292929",backgroundColor:"#181818"},navItem:{paddingHorizontal:6},navText:{color:"#888",fontSize:11,fontWeight:"700"},navActive:{color:"#e3262e"}
});
