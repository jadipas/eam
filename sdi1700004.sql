PGDMP     .                     y            qfsjgwmf     11.9 (Ubuntu 11.9-1.pgdg20.04+1)    13.1 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    2891787    qfsjgwmf    DATABASE     ]   CREATE DATABASE qfsjgwmf WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE qfsjgwmf;
                qfsjgwmf    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    24            �            1259    2891788    adeia_eidikoy_skopoy    TABLE     ?  CREATE TABLE public.adeia_eidikoy_skopoy (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    children jsonb[] NOT NULL,
    status smallint NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL
);
 (   DROP TABLE public.adeia_eidikoy_skopoy;
       public            qfsjgwmf    false    24            �            1259    2891794    adeia_eidikoy_skopoy_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adeia_eidikoy_skopoy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.adeia_eidikoy_skopoy_id_seq;
       public          qfsjgwmf    false    222    24            �           0    0    adeia_eidikoy_skopoy_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.adeia_eidikoy_skopoy_id_seq OWNED BY public.adeia_eidikoy_skopoy.id;
          public          qfsjgwmf    false    223            �            1259    2891796    adeia_ergasias    TABLE       CREATE TABLE public.adeia_ergasias (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL,
    status smallint NOT NULL
);
 "   DROP TABLE public.adeia_ergasias;
       public            qfsjgwmf    false    24            �            1259    2891799    adeia_ergasias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adeia_ergasias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.adeia_ergasias_id_seq;
       public          qfsjgwmf    false    224    24            �           0    0    adeia_ergasias_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.adeia_ergasias_id_seq OWNED BY public.adeia_ergasias.id;
          public          qfsjgwmf    false    225            �            1259    2891801    anastoli_ergasias    TABLE       CREATE TABLE public.anastoli_ergasias (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL,
    status smallint NOT NULL
);
 %   DROP TABLE public.anastoli_ergasias;
       public            qfsjgwmf    false    24            �            1259    2891804    anastoli_ergasias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.anastoli_ergasias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.anastoli_ergasias_id_seq;
       public          qfsjgwmf    false    24    226            �           0    0    anastoli_ergasias_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.anastoli_ergasias_id_seq OWNED BY public.anastoli_ergasias.id;
          public          qfsjgwmf    false    227            �            1259    2891806    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    phone character varying(50) NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    user_id integer
);
    DROP TABLE public.appointment;
       public            qfsjgwmf    false    24            �            1259    2891809    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          qfsjgwmf    false    24    228            �           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          qfsjgwmf    false    229            �            1259    2891811 
   auth_group    TABLE     f   CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);
    DROP TABLE public.auth_group;
       public            qfsjgwmf    false    24            �            1259    2891814    auth_group_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.auth_group_id_seq;
       public          qfsjgwmf    false    24    230            �           0    0    auth_group_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;
          public          qfsjgwmf    false    231            �            1259    2891816    auth_group_permissions    TABLE     �   CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);
 *   DROP TABLE public.auth_group_permissions;
       public            qfsjgwmf    false    24            �            1259    2891819    auth_group_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.auth_group_permissions_id_seq;
       public          qfsjgwmf    false    24    232            �           0    0    auth_group_permissions_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;
          public          qfsjgwmf    false    233            �            1259    2891821    auth_permission    TABLE     �   CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);
 #   DROP TABLE public.auth_permission;
       public            qfsjgwmf    false    24            �            1259    2891824    auth_permission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.auth_permission_id_seq;
       public          qfsjgwmf    false    234    24            �           0    0    auth_permission_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;
          public          qfsjgwmf    false    235            �            1259    2891826    authtoken_token    TABLE     �   CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
 #   DROP TABLE public.authtoken_token;
       public            qfsjgwmf    false    24            �            1259    2891829    company    TABLE     J   CREATE TABLE public.company (
    name character varying(100) NOT NULL
);
    DROP TABLE public.company;
       public            qfsjgwmf    false    24            �            1259    2891832    django_admin_log    TABLE     �  CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);
 $   DROP TABLE public.django_admin_log;
       public            qfsjgwmf    false    24            �            1259    2891839    django_admin_log_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.django_admin_log_id_seq;
       public          qfsjgwmf    false    238    24            �           0    0    django_admin_log_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;
          public          qfsjgwmf    false    239            �            1259    2891841    django_content_type    TABLE     �   CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);
 '   DROP TABLE public.django_content_type;
       public            qfsjgwmf    false    24            �            1259    2891855    django_content_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.django_content_type_id_seq;
       public          qfsjgwmf    false    240    24            �           0    0    django_content_type_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;
          public          qfsjgwmf    false    241            �            1259    2891857    django_migrations    TABLE     �   CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);
 %   DROP TABLE public.django_migrations;
       public            qfsjgwmf    false    24            �            1259    2891863    django_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.django_migrations_id_seq;
       public          qfsjgwmf    false    242    24            �           0    0    django_migrations_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;
          public          qfsjgwmf    false    243            �            1259    2891865    django_session    TABLE     �   CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);
 "   DROP TABLE public.django_session;
       public            qfsjgwmf    false    24            �            1259    2891871 
   tilergasia    TABLE       CREATE TABLE public.tilergasia (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    status smallint NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL
);
    DROP TABLE public.tilergasia;
       public            qfsjgwmf    false    24            �            1259    2891874    tilergasia_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tilergasia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.tilergasia_id_seq;
       public          qfsjgwmf    false    245    24            �           0    0    tilergasia_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.tilergasia_id_seq OWNED BY public.tilergasia.id;
          public          qfsjgwmf    false    246            �            1259    2891876     token_blacklist_blacklistedtoken    TABLE     �   CREATE TABLE public.token_blacklist_blacklistedtoken (
    id integer NOT NULL,
    blacklisted_at timestamp with time zone NOT NULL,
    token_id integer NOT NULL
);
 4   DROP TABLE public.token_blacklist_blacklistedtoken;
       public            qfsjgwmf    false    24            �            1259    2891879 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_blacklist_blacklistedtoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.token_blacklist_blacklistedtoken_id_seq;
       public          qfsjgwmf    false    24    247            �           0    0 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.token_blacklist_blacklistedtoken_id_seq OWNED BY public.token_blacklist_blacklistedtoken.id;
          public          qfsjgwmf    false    248            �            1259    2891892     token_blacklist_outstandingtoken    TABLE       CREATE TABLE public.token_blacklist_outstandingtoken (
    id integer NOT NULL,
    token text NOT NULL,
    created_at timestamp with time zone,
    expires_at timestamp with time zone NOT NULL,
    user_id integer,
    jti character varying(255) NOT NULL
);
 4   DROP TABLE public.token_blacklist_outstandingtoken;
       public            qfsjgwmf    false    24            �            1259    2891898 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_blacklist_outstandingtoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.token_blacklist_outstandingtoken_id_seq;
       public          qfsjgwmf    false    24    249            �           0    0 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.token_blacklist_outstandingtoken_id_seq OWNED BY public.token_blacklist_outstandingtoken.id;
          public          qfsjgwmf    false    250            �            1259    2891900    user    TABLE     r  CREATE TABLE public."user" (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    amka character varying(10) NOT NULL,
    afm character varying(10) NOT NULL,
    username character varying(30) NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    phone character varying(50) NOT NULL,
    date_of_birth date,
    role character varying(50) NOT NULL,
    is_staff boolean NOT NULL,
    company_id character varying(100) NOT NULL
);
    DROP TABLE public."user";
       public            qfsjgwmf    false    24            �            1259    2891906    user_groups    TABLE     z   CREATE TABLE public.user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);
    DROP TABLE public.user_groups;
       public            qfsjgwmf    false    24            �            1259    2891909    user_groups_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_groups_id_seq;
       public          qfsjgwmf    false    24    252            �           0    0    user_groups_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_groups_id_seq OWNED BY public.user_groups.id;
          public          qfsjgwmf    false    253            �            1259    2891911    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          qfsjgwmf    false    251    24            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          qfsjgwmf    false    254            �            1259    2891913    user_user_permissions    TABLE     �   CREATE TABLE public.user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);
 )   DROP TABLE public.user_user_permissions;
       public            qfsjgwmf    false    24                        1259    2891916    user_user_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.user_user_permissions_id_seq;
       public          qfsjgwmf    false    24    255            �           0    0    user_user_permissions_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.user_user_permissions_id_seq OWNED BY public.user_user_permissions.id;
          public          qfsjgwmf    false    256            �           2604    2891918    adeia_eidikoy_skopoy id    DEFAULT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy ALTER COLUMN id SET DEFAULT nextval('public.adeia_eidikoy_skopoy_id_seq'::regclass);
 F   ALTER TABLE public.adeia_eidikoy_skopoy ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    223    222            �           2604    2891919    adeia_ergasias id    DEFAULT     v   ALTER TABLE ONLY public.adeia_ergasias ALTER COLUMN id SET DEFAULT nextval('public.adeia_ergasias_id_seq'::regclass);
 @   ALTER TABLE public.adeia_ergasias ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    225    224            �           2604    2891920    anastoli_ergasias id    DEFAULT     |   ALTER TABLE ONLY public.anastoli_ergasias ALTER COLUMN id SET DEFAULT nextval('public.anastoli_ergasias_id_seq'::regclass);
 C   ALTER TABLE public.anastoli_ergasias ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    227    226            �           2604    2891921    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    229    228            �           2604    2891922    auth_group id    DEFAULT     n   ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);
 <   ALTER TABLE public.auth_group ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    231    230            �           2604    2891923    auth_group_permissions id    DEFAULT     �   ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);
 H   ALTER TABLE public.auth_group_permissions ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    233    232            �           2604    2891924    auth_permission id    DEFAULT     x   ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);
 A   ALTER TABLE public.auth_permission ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    235    234            �           2604    2891925    django_admin_log id    DEFAULT     z   ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);
 B   ALTER TABLE public.django_admin_log ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    239    238            �           2604    2891926    django_content_type id    DEFAULT     �   ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);
 E   ALTER TABLE public.django_content_type ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    241    240            �           2604    2891927    django_migrations id    DEFAULT     |   ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);
 C   ALTER TABLE public.django_migrations ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    243    242            �           2604    2891928    tilergasia id    DEFAULT     n   ALTER TABLE ONLY public.tilergasia ALTER COLUMN id SET DEFAULT nextval('public.tilergasia_id_seq'::regclass);
 <   ALTER TABLE public.tilergasia ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    246    245            �           2604    2891929 #   token_blacklist_blacklistedtoken id    DEFAULT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_blacklistedtoken_id_seq'::regclass);
 R   ALTER TABLE public.token_blacklist_blacklistedtoken ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    248    247            �           2604    2891930 #   token_blacklist_outstandingtoken id    DEFAULT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_outstandingtoken_id_seq'::regclass);
 R   ALTER TABLE public.token_blacklist_outstandingtoken ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    250    249            �           2604    2891931    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    254    251            �           2604    2891932    user_groups id    DEFAULT     p   ALTER TABLE ONLY public.user_groups ALTER COLUMN id SET DEFAULT nextval('public.user_groups_id_seq'::regclass);
 =   ALTER TABLE public.user_groups ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    253    252            �           2604    2891933    user_user_permissions id    DEFAULT     �   ALTER TABLE ONLY public.user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.user_user_permissions_id_seq'::regclass);
 G   ALTER TABLE public.user_user_permissions ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    256    255            �          0    2891788    adeia_eidikoy_skopoy 
   TABLE DATA           }   COPY public.adeia_eidikoy_skopoy (id, from_time, to_time, created_at, children, status, company_id, employee_id) FROM stdin;
    public          qfsjgwmf    false    222            �          0    2891796    adeia_ergasias 
   TABLE DATA           m   COPY public.adeia_ergasias (id, from_time, to_time, created_at, company_id, employee_id, status) FROM stdin;
    public          qfsjgwmf    false    224            �          0    2891801    anastoli_ergasias 
   TABLE DATA           p   COPY public.anastoli_ergasias (id, from_time, to_time, created_at, company_id, employee_id, status) FROM stdin;
    public          qfsjgwmf    false    226            �          0    2891806    appointment 
   TABLE DATA           N   COPY public.appointment (id, email, phone, date, "time", user_id) FROM stdin;
    public          qfsjgwmf    false    228            �          0    2891811 
   auth_group 
   TABLE DATA           .   COPY public.auth_group (id, name) FROM stdin;
    public          qfsjgwmf    false    230            �          0    2891816    auth_group_permissions 
   TABLE DATA           M   COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    public          qfsjgwmf    false    232            �          0    2891821    auth_permission 
   TABLE DATA           N   COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
    public          qfsjgwmf    false    234            �          0    2891826    authtoken_token 
   TABLE DATA           @   COPY public.authtoken_token (key, created, user_id) FROM stdin;
    public          qfsjgwmf    false    236            �          0    2891829    company 
   TABLE DATA           '   COPY public.company (name) FROM stdin;
    public          qfsjgwmf    false    237            �          0    2891832    django_admin_log 
   TABLE DATA           �   COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    public          qfsjgwmf    false    238            �          0    2891841    django_content_type 
   TABLE DATA           C   COPY public.django_content_type (id, app_label, model) FROM stdin;
    public          qfsjgwmf    false    240            �          0    2891857    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          qfsjgwmf    false    242            �          0    2891865    django_session 
   TABLE DATA           P   COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
    public          qfsjgwmf    false    244            �          0    2891871 
   tilergasia 
   TABLE DATA           i   COPY public.tilergasia (id, from_time, to_time, created_at, status, company_id, employee_id) FROM stdin;
    public          qfsjgwmf    false    245            �          0    2891876     token_blacklist_blacklistedtoken 
   TABLE DATA           X   COPY public.token_blacklist_blacklistedtoken (id, blacklisted_at, token_id) FROM stdin;
    public          qfsjgwmf    false    247            �          0    2891892     token_blacklist_outstandingtoken 
   TABLE DATA           k   COPY public.token_blacklist_outstandingtoken (id, token, created_at, expires_at, user_id, jti) FROM stdin;
    public          qfsjgwmf    false    249            �          0    2891900    user 
   TABLE DATA           �   COPY public."user" (id, password, last_login, is_superuser, amka, afm, username, email, first_name, last_name, phone, date_of_birth, role, is_staff, company_id) FROM stdin;
    public          qfsjgwmf    false    251            �          0    2891906    user_groups 
   TABLE DATA           <   COPY public.user_groups (id, user_id, group_id) FROM stdin;
    public          qfsjgwmf    false    252            �          0    2891913    user_user_permissions 
   TABLE DATA           K   COPY public.user_user_permissions (id, user_id, permission_id) FROM stdin;
    public          qfsjgwmf    false    255            �           0    0    adeia_eidikoy_skopoy_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.adeia_eidikoy_skopoy_id_seq', 6, true);
          public          qfsjgwmf    false    223            �           0    0    adeia_ergasias_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.adeia_ergasias_id_seq', 4, true);
          public          qfsjgwmf    false    225            �           0    0    anastoli_ergasias_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.anastoli_ergasias_id_seq', 2, true);
          public          qfsjgwmf    false    227            �           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 6, true);
          public          qfsjgwmf    false    229            �           0    0    auth_group_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);
          public          qfsjgwmf    false    231            �           0    0    auth_group_permissions_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);
          public          qfsjgwmf    false    233            �           0    0    auth_permission_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.auth_permission_id_seq', 64, true);
          public          qfsjgwmf    false    235            �           0    0    django_admin_log_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);
          public          qfsjgwmf    false    239            �           0    0    django_content_type_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.django_content_type_id_seq', 16, true);
          public          qfsjgwmf    false    241            �           0    0    django_migrations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.django_migrations_id_seq', 37, true);
          public          qfsjgwmf    false    243            �           0    0    tilergasia_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.tilergasia_id_seq', 5, true);
          public          qfsjgwmf    false    246            �           0    0 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.token_blacklist_blacklistedtoken_id_seq', 32, true);
          public          qfsjgwmf    false    248            �           0    0 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.token_blacklist_outstandingtoken_id_seq', 57, true);
          public          qfsjgwmf    false    250            �           0    0    user_groups_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.user_groups_id_seq', 1, false);
          public          qfsjgwmf    false    253                        0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 18, true);
          public          qfsjgwmf    false    254                       0    0    user_user_permissions_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.user_user_permissions_id_seq', 1, false);
          public          qfsjgwmf    false    256            �           2606    2891946 .   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_pkey;
       public            qfsjgwmf    false    222            �           2606    2891948 "   adeia_ergasias adeia_ergasias_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_pkey;
       public            qfsjgwmf    false    224            �           2606    2891950 (   anastoli_ergasias anastoli_ergasias_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_pkey;
       public            qfsjgwmf    false    226            �           2606    2891952 /   appointment appointment_date_time_03ddaf7c_uniq 
   CONSTRAINT     r   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_date_time_03ddaf7c_uniq UNIQUE (date, "time");
 Y   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_date_time_03ddaf7c_uniq;
       public            qfsjgwmf    false    228    228            �           2606    2891954    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            qfsjgwmf    false    228            �           2606    2891956    auth_group auth_group_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_name_key;
       public            qfsjgwmf    false    230            �           2606    2891958 R   auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);
 |   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq;
       public            qfsjgwmf    false    232    232            �           2606    2891960 2   auth_group_permissions auth_group_permissions_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_pkey;
       public            qfsjgwmf    false    232            �           2606    2891962    auth_group auth_group_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_pkey;
       public            qfsjgwmf    false    230            �           2606    2891964 F   auth_permission auth_permission_content_type_id_codename_01ab375a_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);
 p   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq;
       public            qfsjgwmf    false    234    234            �           2606    2891966 $   auth_permission auth_permission_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_pkey;
       public            qfsjgwmf    false    234            �           2606    2891968 $   authtoken_token authtoken_token_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);
 N   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_pkey;
       public            qfsjgwmf    false    236            �           2606    2891970 +   authtoken_token authtoken_token_user_id_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);
 U   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_user_id_key;
       public            qfsjgwmf    false    236            �           2606    2891972    company company_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (name);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            qfsjgwmf    false    237            �           2606    2891974 &   django_admin_log django_admin_log_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_pkey;
       public            qfsjgwmf    false    238            �           2606    2891976 E   django_content_type django_content_type_app_label_model_76bd3d3b_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);
 o   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq;
       public            qfsjgwmf    false    240    240            �           2606    2891978 ,   django_content_type django_content_type_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_pkey;
       public            qfsjgwmf    false    240            �           2606    2891980 (   django_migrations django_migrations_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.django_migrations DROP CONSTRAINT django_migrations_pkey;
       public            qfsjgwmf    false    242            �           2606    2891982 "   django_session django_session_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);
 L   ALTER TABLE ONLY public.django_session DROP CONSTRAINT django_session_pkey;
       public            qfsjgwmf    false    244            �           2606    2891984    tilergasia tilergasia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_pkey;
       public            qfsjgwmf    false    245                        2606    2891986 F   token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blacklistedtoken_pkey;
       public            qfsjgwmf    false    247                       2606    2891988 N   token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_token_id_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_token_id_key UNIQUE (token_id);
 x   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blacklistedtoken_token_id_key;
       public            qfsjgwmf    false    247                       2606    2891990 W   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq UNIQUE (jti);
 �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq;
       public            qfsjgwmf    false    249                       2606    2891992 F   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_pkey;
       public            qfsjgwmf    false    249                       2606    2891994    user user_afm_key 
   CONSTRAINT     M   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_afm_key UNIQUE (afm);
 =   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_afm_key;
       public            qfsjgwmf    false    251                       2606    2891996    user user_amka_key 
   CONSTRAINT     O   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_amka_key UNIQUE (amka);
 >   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_amka_key;
       public            qfsjgwmf    false    251                       2606    2891998    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public            qfsjgwmf    false    251                       2606    2892000    user_groups user_groups_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_pkey;
       public            qfsjgwmf    false    252            !           2606    2892002 6   user_groups user_groups_user_id_group_id_40beef00_uniq 
   CONSTRAINT     ~   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_user_id_group_id_40beef00_uniq UNIQUE (user_id, group_id);
 `   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_user_id_group_id_40beef00_uniq;
       public            qfsjgwmf    false    252    252                       2606    2892004    user user_phone_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_phone_key UNIQUE (phone);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_phone_key;
       public            qfsjgwmf    false    251                       2606    2892006    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            qfsjgwmf    false    251            $           2606    2892008 0   user_user_permissions user_user_permissions_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_pkey;
       public            qfsjgwmf    false    255            '           2606    2892010 O   user_user_permissions user_user_permissions_user_id_permission_id_7dc6e2e0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_user_id_permission_id_7dc6e2e0_uniq UNIQUE (user_id, permission_id);
 y   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_user_id_permission_id_7dc6e2e0_uniq;
       public            qfsjgwmf    false    255    255                       2606    2892012    user user_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_username_key;
       public            qfsjgwmf    false    251            �           1259    2892013 (   adeia_eidikoy_skopoy_company_id_8698291f    INDEX     o   CREATE INDEX adeia_eidikoy_skopoy_company_id_8698291f ON public.adeia_eidikoy_skopoy USING btree (company_id);
 <   DROP INDEX public.adeia_eidikoy_skopoy_company_id_8698291f;
       public            qfsjgwmf    false    222            �           1259    2892014 -   adeia_eidikoy_skopoy_company_id_8698291f_like    INDEX     �   CREATE INDEX adeia_eidikoy_skopoy_company_id_8698291f_like ON public.adeia_eidikoy_skopoy USING btree (company_id varchar_pattern_ops);
 A   DROP INDEX public.adeia_eidikoy_skopoy_company_id_8698291f_like;
       public            qfsjgwmf    false    222            �           1259    2892015 )   adeia_eidikoy_skopoy_employee_id_323cc535    INDEX     q   CREATE INDEX adeia_eidikoy_skopoy_employee_id_323cc535 ON public.adeia_eidikoy_skopoy USING btree (employee_id);
 =   DROP INDEX public.adeia_eidikoy_skopoy_employee_id_323cc535;
       public            qfsjgwmf    false    222            �           1259    2892016 "   adeia_ergasias_company_id_1e3589c4    INDEX     c   CREATE INDEX adeia_ergasias_company_id_1e3589c4 ON public.adeia_ergasias USING btree (company_id);
 6   DROP INDEX public.adeia_ergasias_company_id_1e3589c4;
       public            qfsjgwmf    false    224            �           1259    2892017 '   adeia_ergasias_company_id_1e3589c4_like    INDEX     |   CREATE INDEX adeia_ergasias_company_id_1e3589c4_like ON public.adeia_ergasias USING btree (company_id varchar_pattern_ops);
 ;   DROP INDEX public.adeia_ergasias_company_id_1e3589c4_like;
       public            qfsjgwmf    false    224            �           1259    2892018 #   adeia_ergasias_employee_id_478b4a3a    INDEX     e   CREATE INDEX adeia_ergasias_employee_id_478b4a3a ON public.adeia_ergasias USING btree (employee_id);
 7   DROP INDEX public.adeia_ergasias_employee_id_478b4a3a;
       public            qfsjgwmf    false    224            �           1259    2892019 %   anastoli_ergasias_company_id_f0d1ba2f    INDEX     i   CREATE INDEX anastoli_ergasias_company_id_f0d1ba2f ON public.anastoli_ergasias USING btree (company_id);
 9   DROP INDEX public.anastoli_ergasias_company_id_f0d1ba2f;
       public            qfsjgwmf    false    226            �           1259    2892020 *   anastoli_ergasias_company_id_f0d1ba2f_like    INDEX     �   CREATE INDEX anastoli_ergasias_company_id_f0d1ba2f_like ON public.anastoli_ergasias USING btree (company_id varchar_pattern_ops);
 >   DROP INDEX public.anastoli_ergasias_company_id_f0d1ba2f_like;
       public            qfsjgwmf    false    226            �           1259    2892021 &   anastoli_ergasias_employee_id_e2cadece    INDEX     k   CREATE INDEX anastoli_ergasias_employee_id_e2cadece ON public.anastoli_ergasias USING btree (employee_id);
 :   DROP INDEX public.anastoli_ergasias_employee_id_e2cadece;
       public            qfsjgwmf    false    226            �           1259    2892022    appointment_user_id_e98b8296    INDEX     W   CREATE INDEX appointment_user_id_e98b8296 ON public.appointment USING btree (user_id);
 0   DROP INDEX public.appointment_user_id_e98b8296;
       public            qfsjgwmf    false    228            �           1259    2892023    auth_group_name_a6ea08ec_like    INDEX     h   CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);
 1   DROP INDEX public.auth_group_name_a6ea08ec_like;
       public            qfsjgwmf    false    230            �           1259    2892024 (   auth_group_permissions_group_id_b120cbf9    INDEX     o   CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);
 <   DROP INDEX public.auth_group_permissions_group_id_b120cbf9;
       public            qfsjgwmf    false    232            �           1259    2892025 -   auth_group_permissions_permission_id_84c5c92e    INDEX     y   CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);
 A   DROP INDEX public.auth_group_permissions_permission_id_84c5c92e;
       public            qfsjgwmf    false    232            �           1259    2892026 (   auth_permission_content_type_id_2f476e4b    INDEX     o   CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);
 <   DROP INDEX public.auth_permission_content_type_id_2f476e4b;
       public            qfsjgwmf    false    234            �           1259    2892027 !   authtoken_token_key_10f0b77e_like    INDEX     p   CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);
 5   DROP INDEX public.authtoken_token_key_10f0b77e_like;
       public            qfsjgwmf    false    236            �           1259    2892028    company_name_5abe57d9_like    INDEX     b   CREATE INDEX company_name_5abe57d9_like ON public.company USING btree (name varchar_pattern_ops);
 .   DROP INDEX public.company_name_5abe57d9_like;
       public            qfsjgwmf    false    237            �           1259    2892029 )   django_admin_log_content_type_id_c4bce8eb    INDEX     q   CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);
 =   DROP INDEX public.django_admin_log_content_type_id_c4bce8eb;
       public            qfsjgwmf    false    238            �           1259    2892030 !   django_admin_log_user_id_c564eba6    INDEX     a   CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);
 5   DROP INDEX public.django_admin_log_user_id_c564eba6;
       public            qfsjgwmf    false    238            �           1259    2892031 #   django_session_expire_date_a5c62663    INDEX     e   CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);
 7   DROP INDEX public.django_session_expire_date_a5c62663;
       public            qfsjgwmf    false    244            �           1259    2892032 (   django_session_session_key_c0390e0f_like    INDEX     ~   CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);
 <   DROP INDEX public.django_session_session_key_c0390e0f_like;
       public            qfsjgwmf    false    244            �           1259    2892033    tilergasia_company_id_c9c0c65b    INDEX     [   CREATE INDEX tilergasia_company_id_c9c0c65b ON public.tilergasia USING btree (company_id);
 2   DROP INDEX public.tilergasia_company_id_c9c0c65b;
       public            qfsjgwmf    false    245            �           1259    2892034 #   tilergasia_company_id_c9c0c65b_like    INDEX     t   CREATE INDEX tilergasia_company_id_c9c0c65b_like ON public.tilergasia USING btree (company_id varchar_pattern_ops);
 7   DROP INDEX public.tilergasia_company_id_c9c0c65b_like;
       public            qfsjgwmf    false    245            �           1259    2892035    tilergasia_employee_id_eb9575a5    INDEX     ]   CREATE INDEX tilergasia_employee_id_eb9575a5 ON public.tilergasia USING btree (employee_id);
 3   DROP INDEX public.tilergasia_employee_id_eb9575a5;
       public            qfsjgwmf    false    245                       1259    2892036 6   token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like    INDEX     �   CREATE INDEX token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like ON public.token_blacklist_outstandingtoken USING btree (jti varchar_pattern_ops);
 J   DROP INDEX public.token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like;
       public            qfsjgwmf    false    249                       1259    2892037 1   token_blacklist_outstandingtoken_user_id_83bc629a    INDEX     �   CREATE INDEX token_blacklist_outstandingtoken_user_id_83bc629a ON public.token_blacklist_outstandingtoken USING btree (user_id);
 E   DROP INDEX public.token_blacklist_outstandingtoken_user_id_83bc629a;
       public            qfsjgwmf    false    249            	           1259    2892038    user_afm_320d4b5a_like    INDEX     \   CREATE INDEX user_afm_320d4b5a_like ON public."user" USING btree (afm varchar_pattern_ops);
 *   DROP INDEX public.user_afm_320d4b5a_like;
       public            qfsjgwmf    false    251                       1259    2892039    user_amka_23b6089e_like    INDEX     ^   CREATE INDEX user_amka_23b6089e_like ON public."user" USING btree (amka varchar_pattern_ops);
 +   DROP INDEX public.user_amka_23b6089e_like;
       public            qfsjgwmf    false    251                       1259    2892040    user_company_id_99854d28    INDEX     Q   CREATE INDEX user_company_id_99854d28 ON public."user" USING btree (company_id);
 ,   DROP INDEX public.user_company_id_99854d28;
       public            qfsjgwmf    false    251                       1259    2892041    user_company_id_99854d28_like    INDEX     j   CREATE INDEX user_company_id_99854d28_like ON public."user" USING btree (company_id varchar_pattern_ops);
 1   DROP INDEX public.user_company_id_99854d28_like;
       public            qfsjgwmf    false    251                       1259    2892042    user_email_54dc62b2_like    INDEX     `   CREATE INDEX user_email_54dc62b2_like ON public."user" USING btree (email varchar_pattern_ops);
 ,   DROP INDEX public.user_email_54dc62b2_like;
       public            qfsjgwmf    false    251                       1259    2892043    user_groups_group_id_b76f8aba    INDEX     Y   CREATE INDEX user_groups_group_id_b76f8aba ON public.user_groups USING btree (group_id);
 1   DROP INDEX public.user_groups_group_id_b76f8aba;
       public            qfsjgwmf    false    252                       1259    2892044    user_groups_user_id_abaea130    INDEX     W   CREATE INDEX user_groups_user_id_abaea130 ON public.user_groups USING btree (user_id);
 0   DROP INDEX public.user_groups_user_id_abaea130;
       public            qfsjgwmf    false    252                       1259    2892045    user_phone_fcd7f7da_like    INDEX     `   CREATE INDEX user_phone_fcd7f7da_like ON public."user" USING btree (phone varchar_pattern_ops);
 ,   DROP INDEX public.user_phone_fcd7f7da_like;
       public            qfsjgwmf    false    251            "           1259    2892046 ,   user_user_permissions_permission_id_9deb68a3    INDEX     w   CREATE INDEX user_user_permissions_permission_id_9deb68a3 ON public.user_user_permissions USING btree (permission_id);
 @   DROP INDEX public.user_user_permissions_permission_id_9deb68a3;
       public            qfsjgwmf    false    255            %           1259    2892047 &   user_user_permissions_user_id_ed4a47ea    INDEX     k   CREATE INDEX user_user_permissions_user_id_ed4a47ea ON public.user_user_permissions USING btree (user_id);
 :   DROP INDEX public.user_user_permissions_user_id_ed4a47ea;
       public            qfsjgwmf    false    255                       1259    2892048    user_username_cf016618_like    INDEX     f   CREATE INDEX user_username_cf016618_like ON public."user" USING btree (username varchar_pattern_ops);
 /   DROP INDEX public.user_username_cf016618_like;
       public            qfsjgwmf    false    251            (           2606    2892049 M   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 w   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name;
       public          qfsjgwmf    false    4075    237    222            )           2606    2892054 I   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 s   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id;
       public          qfsjgwmf    false    4120    222    251            *           2606    2892059 A   adeia_ergasias adeia_ergasias_company_id_1e3589c4_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_company_id_1e3589c4_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 k   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_company_id_1e3589c4_fk_company_name;
       public          qfsjgwmf    false    224    4075    237            +           2606    2892064 =   adeia_ergasias adeia_ergasias_employee_id_478b4a3a_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_employee_id_478b4a3a_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 g   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_employee_id_478b4a3a_fk_user_id;
       public          qfsjgwmf    false    224    4120    251            ,           2606    2892069 G   anastoli_ergasias anastoli_ergasias_company_id_f0d1ba2f_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_company_id_f0d1ba2f_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_company_id_f0d1ba2f_fk_company_name;
       public          qfsjgwmf    false    237    226    4075            -           2606    2892074 C   anastoli_ergasias anastoli_ergasias_employee_id_e2cadece_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_employee_id_e2cadece_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 m   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_employee_id_e2cadece_fk_user_id;
       public          qfsjgwmf    false    4120    226    251            .           2606    2892079 3   appointment appointment_user_id_e98b8296_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_user_id_e98b8296_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 ]   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_user_id_e98b8296_fk_user_id;
       public          qfsjgwmf    false    228    251    4120            /           2606    2892084 O   auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 y   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm;
       public          qfsjgwmf    false    4067    232    234            0           2606    2892089 P   auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 z   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id;
       public          qfsjgwmf    false    232    4056    230            1           2606    2892094 E   auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 o   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co;
       public          qfsjgwmf    false    4083    234    240            2           2606    2892099 ;   authtoken_token authtoken_token_user_id_35299eff_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 e   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_user_id_35299eff_fk_user_id;
       public          qfsjgwmf    false    236    4120    251            3           2606    2892104 G   django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co;
       public          qfsjgwmf    false    238    4083    240            4           2606    2892109 =   django_admin_log django_admin_log_user_id_c564eba6_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 g   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_user_id_c564eba6_fk_user_id;
       public          qfsjgwmf    false    251    4120    238            5           2606    2892114 9   tilergasia tilergasia_company_id_c9c0c65b_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_company_id_c9c0c65b_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 c   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_company_id_c9c0c65b_fk_company_name;
       public          qfsjgwmf    false    4075    237    245            6           2606    2892119 5   tilergasia tilergasia_employee_id_eb9575a5_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_employee_id_eb9575a5_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 _   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_employee_id_eb9575a5_fk_user_id;
       public          qfsjgwmf    false    4120    251    245            7           2606    2892124 T   token_blacklist_blacklistedtoken token_blacklist_blac_token_id_3cc7fe56_fk_token_bla    FK CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blac_token_id_3cc7fe56_fk_token_bla FOREIGN KEY (token_id) REFERENCES public.token_blacklist_outstandingtoken(id) DEFERRABLE INITIALLY DEFERRED;
 ~   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blac_token_id_3cc7fe56_fk_token_bla;
       public          qfsjgwmf    false    249    4103    247            8           2606    2892129 ]   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id;
       public          qfsjgwmf    false    249    4120    251            9           2606    2892145 -   user user_company_id_99854d28_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_company_id_99854d28_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 Y   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_company_id_99854d28_fk_company_name;
       public          qfsjgwmf    false    251    237    4075            :           2606    2892150 :   user_groups user_groups_group_id_b76f8aba_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_group_id_b76f8aba_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 d   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_group_id_b76f8aba_fk_auth_group_id;
       public          qfsjgwmf    false    252    230    4056            ;           2606    2892155 3   user_groups user_groups_user_id_abaea130_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_user_id_abaea130_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 ]   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_user_id_abaea130_fk_user_id;
       public          qfsjgwmf    false    251    4120    252            <           2606    2892160 N   user_user_permissions user_user_permission_permission_id_9deb68a3_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permission_permission_id_9deb68a3_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 x   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permission_permission_id_9deb68a3_fk_auth_perm;
       public          qfsjgwmf    false    255    4067    234            =           2606    2892165 G   user_user_permissions user_user_permissions_user_id_ed4a47ea_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_user_id_ed4a47ea_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_user_id_ed4a47ea_fk_user_id;
       public          qfsjgwmf    false    255    251    4120            �   �   x����
1E��+BZw���c'���4"����r�7j��hs9�8LP �H<�b^1��Q "$ˎH�v��/��0���tm����a���>U|S�[]�C�C�MY4x�E�_f�3KA���"8�%���:����o�      �   g   x���!�0DQݜ�����4���8������}��k"�+t�m��2�^��+ מ� ��#��=�����*���<�0+���������Yjo}��4-�      �   M   x�m�!�0@��ϴsw������Yn����E1�&������aG_���d���=��#�R����f����_�      �   ^   x�3�����/vH�M���K���4�4202�50�56�4��26�20����2"����Ԙ�M
b��	���T��)�����!�L� ��&^      �      x������ � �      �      x������ � �      �   �  x�m�ۮ� E��+�U|�广p+U4F)��M������������Z�]�FMS3�[��__����K���[ٛfT�B��g�9����{o 4f�E��m�Y�5ܐG*�@�#��1	{FEFG�]��mu�E�A0�-��K��HK�:�t���`�}6�:���k�k�b"��ޑ�@u>`�b�H�>xPd�E?����S��t��1�J�g*�xf�B��uTC(Xe�%��X�}�#\aXɮ�ח�|s�����/��^V��� �<7��S�y�);���)�D�}� �B����C���U�w�i�zS�Q�8����e�>�Z��$�@-	�e�T���)l���Q����ޛH���4ϰ��4ϐ��8�O�S���ݫ��nq������ϕ��0��/��<��C1i�&�,���ݵm|��{!V��(��~ft�!��DP�sl���Z,������f�� Ț�A� il�P
 l�Y]�ټΖ�q"q��U���2ʺ[��$e�����1l�{��+;{K����Ws0ae]�Fa�2J*]�	�i��8c�c6EH�%G�d�S�7�󩰄?Ҧr:���Lof��m|CqGYG9��Ah�VN�������'H��&������      �      x������ � �      �   %   x��w�
�w4� ˵�+��+�$�+F��� ��s      �      x������ � �      �   �   x�e�[N�0E��� 2/`/H�4�XM�(v���:�j�����X�r �3d�x�x j�%ՙ�X�72VmO0���z/���Һa�/@àM|�B��e'�R�W��:���fNu$c2|��Ĵ���s�I�MZ�ckO�)	�/��_T�^�xK���)�9�S���韣��I"˸9g�R�����0\���y��O��^�g      �   2  x����n�H������jZu裟e�k�hF��o�8Ď{�AX������w��Ou�����v ����T펀���� {���&�<ѝ��Xw��:^��I쫮.���D��9�>zwP�Y�(���X����f����/�]�ۺ?ɿ�P�ʐc�e6_P�$�����{
)p:`.�n}MY.��ᜦ"���ms�h�)�v85���C��zy�~�X9�_s3n���).#+2"���]
�]�ͱJ�8��x��8c��i�Nu�-��8m�F���|;b��M�J��e�����pA��a>��*`0o n�E��Y&T��8��_��4��'�}flVF�����-���]7�ˇ�0���.�Wd��|�h�URĜ��H�+�r�/L����2@�{���K���V�����bo1�����qZ�z�fH���'d�huHK���)^��P���F�Q��~؉Q��u�K���m�h��F�j�<b �-�c��V*H�8�x�Vͻ�a�7{�h��b���9��iT��*3�\V���?�fz�2-&q�1o/ْ��0�)U������&��o+f�z-ƕp��މ{��@a�Z+ �`�H߁d�K��=�J �a�R��Q�9X���D�_K�biV�%�9cK �D�E� ����9`$
6������F�{�{�J��뷀�:i�c49�^�I�i�q��oS�壽7��gO�Ip��CӧN������H{ �I1OV�;�m3!��f�3h�����1���Ħ� 2�@,�����׍`�9L�������he�������?TǛ'      �      x������ � �      �   �   x�e�;1�:9=J����C�q�߱H�lgY~�&
Q��;����0�É�P��H*H�ב���G��m9�.[�x�r��Ӆ�}L[-��y����P�Q٦jL�cs.g��8�Y�1�Ys�o-�9�      �   �  x�m�In�0�ux��7"pt���MI�*+���9������M�B���d�Z��C�
���>��b�� o/�~äŪ�0��i�O�0�B�D�>	Q?�bC=h�ZY���a�IA\�u����CX �&i��l�%���qJ�؄w\ ���4n���r����B�}�W�i� �|��-�=��yD��2�yxw�v�ŀ�abR�鲰�d�����XC4�vw���o�2�ɷ!�|����| ��1T�a�ҫ�̶G/#}h���1L��������̗���r�ص�?�\k�0��虩���e�W]${\��v��5p���oSS��L��8֑�2*���.�L��"�k�Zr�U���Y�g҉� �.�����ᚥ�]���7C����� |�u�b������� ����-      �      x���Yo��ֆ��_q�?%��v�0��6���:R�c� �����@�N_!5�n�j�[�h�Or�d^_��^�G�A���F$�N�.��=�,_��*\	xqc���˨���fw�-g,jv��N�8�yQ���2xo�k��W�yA|�_Zz�Xzt��.6���$��֧�t�?�{�����a������-��֣e:z�����r1�~8v��y���+v?���l�ؚL����~B�	+�A��L����C�Q�;zy�����P%dDa*f!�$�ָ�	gJ�<F1P���ߊYĤ���V�+-�_Y�����^�mwJ-g\x�D����b����۫�-��М��x9���x%���b�Wg2���i���$#��g�8f�w�.Q�4�G�T��J��4�W'Z*D$*gq1-��GI���$���/�Ԫf��[�e��i��N�kV�;��|t�KfO�����R�.,1����Y}ښsA�����=Y��>��4����g#���]��i�O�D�*O�Y��@�SD4H"�p@j�A��u����^g��T��YՏ�)�l�^��{ii�-�K��Z}�X�ܞ�>&�מF��F轅�G�`�d���hV�I��Ϙ+���]��iƐ���b�"�T�0�<H�T���D��HV��ǿ�2[o�>�|�˭<[��4I���UN�UM�ﳝ��Ӭ	��A�������c�T��4gd�ַ�a����Ƒ��4�/r�>k*��kv�ʧ�?��P(Z�IC��8M4�kB�Քi�ԩ�������aH��+��e����~�U��ϣ�����?k�vؼ�+��'����<ۍU%3�s}��F"��V���L}��3��K�k�S������Q�"U<L�H�T�!SQS"�����6���Ǚ���UZK�h綳`�;:��2�� ���G��]���Ѕ��b���l��ĝ�e�o롘�� �n��UO�9�����V���jn�a_������Z����!�d� �%jʂ ��(dA$4-�	N(M5S�iʱ*:m��ST�a"hWд$g�+�Y $��F�����[ X��;C����>O�A��tiҲ��u�I:]�6��2��D�1c���k�3Ʉ�Z�(�" Dk	SQ�H�L�5�0���^�筣���/.�����������{�崀4z����fꊞ�Ѣ9�l{&ņ�a�n7�N�P�<�S��Z��]3F���𷺼?%K1BX�����0EBAHII���I��F��F����g0*�V>E�kAO�`��.� 1,9keVS��[/�7�Zgr(�XO
��X2V����D���|W5�YdlZw�a�)ϊ�B#�.�%�)�����Xa,V8���P�(������D��M7sG�<��:�n;�t`�|��Є�rte�揜,��A5�4H"��z�yǶ�,Ȕu8UO���Q�7�||��,��Pl���ڼD?9C�,U��a�i03E�Y�(�Q?�D6��r�a8r�!��´Uq2(�҄�	�[ȫ�ĳ��H~�w�����q6�~�h'P;��ݺ�'��ǣ��W�#"y��Y��2��|Z�'MD$D�PDb�YU`J�C�VH4R������2}�
�+Ǚ�J���l}�M�Wxn{e�����w���p6�[�m���E���4;6�en��i:�����j�{��L���T� ��~
H%
�*LK4M�0�DMB��Hj�!�qˉ��W-��~�91P�,GN<�`~>�^5��dT��/��̹�%��>/���p�]��2�ur����
O��[2�껩xFD�����~�r0�T�5���J �:S�H�����?H�wo$���J�2�.�{+�)���s��Mc���s�d��ؘ�G���#W{���4?����<)�Zj穻ق�Fw�a��d�T�.�%�)�%@"�4e$�i8�����L�~�/*�����~�	����F���f#��|i5�a�c��?��,w��Jh�j�:Z43q�������y�d�8ֵnE~��F0,��gB('�`���e�\hj�P����\M��$�z?��ԄY�0���h���t�4	�W	=�iq�}�$��ge��M�Z����jo�h�)�bh�u���zc^�n��IyjL�jF�Q_���#�f����2I*�H
 ��� "A±bSC]>���d}I2��קG��N�Z��`v�� ��Vf�+���-�c]�	�y5�Xl٠޴�ߠ�(KJ�����$��k�;�d"�gJՔ�]��uI8�9"O�
/���C/)!1���!쿠������V^'�D���<��G�k=��K��e�d����LW��9���6�O����N�������ѶLQ'o�7�	&���� �输�
~*� %JU`5Иʐ`"BQ*�zV�y��棛Nf=�Xu�;p���n���˽�{2�F�rnF l'Y��]So�֓�*��8�v�z�t�1㓸�YASUV�S�}aq���X�re���ò0I�HP�	>S	����J�C��F�f9��W��� Y��=WYd$��2�z^p��s���ÔY�N��e��$���U:o��g�9�No8T�,(�ܼ����g�	��w�.��4�B�a��b�q�`0�j�5��_ ��i����y�!���J(Dc��A?g� �wDX�s�����o�I8���O�2�ڍ67�qC(�'O�f?:��U{��J�^~��Y����ɮ�O�J��� R �∆�����<�&	k�!�_Mgtc�L2�(N��Y���?�dZɳ˩#K���ѿ�l2;8o��Z��L������'������~p��=�}[��L��!=#�)'��]������@�S��i�&�KG�1��y��fo&��z@�� ��_�t��vǹ<{4]I��?���n�քuR�k�R���=-'���i���l���!�gkkt#�w.'����Wr��������
-Vb# D"��D�)�h�y��1�M�7� DV �d4Jygg��ϣ��ױYy���̬F'�t�}��]���^Y��54w�Fg7Y�[�\w>�b�U0���T��3����;�~E?I��T��$�	���S���S�+*t�y���~u�&�/�` ���=n�<j�\vZ%Pm�+e���r�3�P�N=O/Zn���=S-����w�e�i�=�[D��A/�I�<c��������������i�z[��0��Q�<��A3�^Y���Kl����l�9u�ʸUe�㈛�rhk����uy�L����8�̽zw8q;�I��OC����ۋ��M���b}��H���"����W�S3M�EDK�L��4AS%���=��A��8�d�+��Y&��	i�`/�<���ǳ������=%���aNOxƛ�A4뭟�4&ʂ?E�ww7?nxۼ�Lb�x����]�W��"I0��Ø�j�T]Nf��=��%8L��~��A����c&��%y�:[�l	)ɡ����=C��$Y��ܜ���4O��;����4 �z��x�U���tz#X"�����{ɮѫdZ��$����0MB�ч���{���T(�te7�V�O�q�Yi�l�ʿJv���6�g����>hu���)�G��{<��Tģ�x7��~9�`@�����v3�B�
�P�N��q�
���q�>�A3��n �.箤]BfP�����,@%��"?�Y:s�l��G�֟73gY��iR�uL�׏�a��ݕ�[�ߢ�� h�����(7�����4���)Sp��4(��SA���?H��n�m�~�ie��Y5VrE�6ZG�M}z����ף����<J6�>-Ԫ�t�o�+&�:\=1���>��bz'���R��}���>�G�j1�(aH�Db��dE�X�5���}\7��3[�ܤ^a������<���/�6�ܬ@��r>1���� ��u8��QG����V�o�7=t��Ao���YRg_5Ê�WLyFS�i�+z��`Ʃ�\Uc�y�� �
  ���xZ����O�؍1/��tZ'�q�r�L.��`�-
r`X����f���I{up�պ?k C��x�8�r�:���ˑw�5�/4�L�=2�����)��Ǳ����$�R-Bj�Y&�Fa .���W�<b�����7���a��\k�0-�1�����՟��<4�7�ZM���3�d��^meiM�F/#�D�Gݤ~/�wr\0��?HƮ�r�(� ��@q�(a��U�j�@J&3��2�zn}6�;z����:���<w\BI�-�r����\�پ7�:�}�P_7ޱqx_��&��&��H�)O�^��zw�1M3��~��~�RQ�� ���b�qJx�HE"5�p���P�2��Nn���^}���A�#/������V���QC��g͔�a��e��3���
/���@���W�w�q�����d�~��^/ �kR&�eaj�0�@U8)4�D.��GX �Y�:}�Y۰2�`��,L���ά�){��Y!����sƋf�7�~-�x<A>@�4^�ᒲ<Z���}��U1S|�F3�E�&�g��4�F�# 
�k�3�&A����)8j�@jV�n/��|��3���Z<�ɔg�NO���� z?j6�lG���f��g,:��̪�鼓�U_����:�Y�ύ��fX{��3LD�5~E�y&y�Z� �P$��(AZ�=�|jFn�  ��\���p��6��So��䲆�Y���da�1���ӻ�[�f=E3k�LR�߬Ü�
,�_�?��	I��P��r���^��9����)K0�(1����B���a.��A�|����uȵ������х\39���G�l�8��B�ǡ�&K��r(_���3���yR����랗�������u3����M�u3,���"T�q�	�#
�P��#��S tsզw��gvK+�����w��0�벞�%?\�\�fd�E�R�h���\��u�9_��bߗD^?O��]Ҁ,L}F
F�
��^�DD�B��`�H�(&j
oB%	j�QL_u�͚�6�X�ͨ�U�w`�.�.�w�ج q\?3�2��}��Շqc�;�l^_ҵ�b�^�J�J�ʉ9\��
��Kph�*����'k1=J1P|"��S�~'	�i@ �����C�Ln6-��X��`y�#�!�>5.|�W��'�̸�/����4�Z��:�������X���5�W��EB}���p˧�R��g���|�M��g��!�H9��*�AKY'a���Coz�_6�o�A@��4-�Q�7y�r���g��g/odП �܁z���Sn.?�������v`�j`�6���׋q��u;ڝd���6� �C�k�궅HS�L�����qJ����1V�{�W�8�,;�̗�Q�X���ڷ��
����e�n?I����e�h���m5�ͷ�`�Qtơc=e>X�����}�1$��ń�|��k�z?ɃD*U�@a	
�0��DL��K� �c�^JV} �͗k<N/�F�%u�zQ�N#�H��:�D���2{��}�(���vޞw&o��Vg�'7��ہl���f���U�50���'����8VRL@+�*P��q��*rf>�A��ٴs[�).�ϖ�����!S��Q��3_.�?é؞ޓ���y|�֍�`1̆����-�j�毓A��[����P_��O�y	~J��	mEU#1��X�B`���|#�f���[�S1��)f?^���\3���_|��Yf��f/�W�mֈ��0>M��[/j�~�|��[����/�dͩ�r��5z�y,8MLC�ft
 5���WE�?��+��G�nz=8�
���ZjW�%�tg+?��i�̟��������Ao:�`}����kЯ�V�f���-'o�֝dTyA�1��x����qE���P�b�B��$I�2)FI�?�A��������$��r�ܼ|=U��ܻ�2��d9@jN��g̘e��k^�j��41z��x�:��^���N��̮����>�(�i�k��~i���^K3�h�4"!dU��&�1G<т ���8�����H��Jв��J5t���10�8:���١�����iG��Sct|������37�Vᴷ�;�÷<�����дo!��W�a��~5d
E��c�&1�8`@�5� 5� ����+߅���wۅGƙ/�<nxLr�W��:��w�d��ـ��'�yn�.&y�m��K��h9͞���^2qٵV)'�L�o�:�0F
����7�aq�Q�gD��� ,0�7N�*���8Ò_y���6zr��M�3S�,��[<��n�6ѻ��q�o�}��jڹԑk̬������;�{A�Y%HӾQ�5���P! ZI �Ɛ�B����l�s�j�A�o�]v�?&p��)�a	�&Ww,�<��je�����iz8ѿS�̱�u����\&�ꥳk���r�����F�Y'�;��$����g�h�!�.���i�#�����30���P��῕/���0�Ȕ��o��"K�e�����šDe�U+���t���z�������`��罠}����t�QL�Ul�7��ǯ�ɭ,�U�zf����E��,�	a�J +��LUBE��[Uľ�L��Rߑ��ӣ�Ζ���l%��נa�.}:����~��+��m��Ͱ��^��~D&ţ��'�p����f�Gw�a���̡0�$�D��DM.�Ǒ�)�Z�pP�'a(;ZX��s�V�ۋq(      �   `  x�m��n�0@��;x�T�@0�JSBii��T�p�H��k馻�y{�c�b;��p#�#���m4'��l�N8o����^��9��sRevޓRI�8?\+�M]Ϛ�	��bF��h��XB�����*'�0�<M����I~v]Գ�E���-�5�Չ�1a8��<:�YJN.jƭMM5/�#�,�Ok�x�����vw4��R��%��O��P�r�G:2��?6����tygX�0YX|A����S�i�Z?�7�H�b�I�uU;:��(��p ���+ @��Ũ�����]�����.��M<�v�dpf�w����^�fFԍ�M��D��])��ҝ�\ت��Z+䤎kq����`;����y��xGU�/�Cm�Nb,�pEdۅ�8����.H^*J��d��^�#����Ө<����������n�:u=�;�1��Z�iG뗌8���oTz�({
�4W=��ոa�@Mj.o_�1�L;GZX�����6�Q<��5FB7��(]p�{�\6bl�����d��Y"2��f�aj�~��hee*쎢;����������N�nu�K�,����=�8�bE�      �      x������ � �      �      x������ � �     